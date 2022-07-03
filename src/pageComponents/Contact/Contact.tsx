import React, {useRef} from 'react';
import Grid from "@mui/material/Grid";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import linePositions from "../../constants/sectionHeader";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";
import Stack from "@mui/material/Stack";
import BlueButton from "../../components/common/BlueButton/BlueButton";
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import {Controller, useForm} from "react-hook-form";

const StyledTextField = styled(TextField)(() => ({

    fontFamily: 'Dosis',
    fontWeight: 400,
    fontSize: 20,
    textAlign: 'center',
    width: '100%',

    '& .MuiInputLabel-root':{
        color: 'var(--paragraph-color)',
    },
    '& label.Mui-focused': {
        color: 'var(--paragraph-color)',

    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'var(--paragraph-color)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {

            color: '#90939E',
            borderColor: 'var(--paragraph-color)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'var(--accent-color)',
        },
    },
    '& .Mui-error': {
        fieldset: {
            borderColor: 'var(--paragraph-color) !important',
        },
    },
    '& .MuiFormLabel-root.Mui-error': {
        color: 'var(--paragraph-color)',
    },
    '& .MuiFormHelperText-root.Mui-error': {
        color: '#FFD19C',
        fontFamily: 'Dosis',
        fontWeight: 300,
        fontSize: 16,
        marginLeft: 5
    },
}))


const Contact = (): JSX.Element => {
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            from_name: '',
            reply_to: '',
            message: '',
        },
    });
    const formRef = useRef();

    const onSubmit = () => {
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formRef.current, process.env.USER_ID)
            .then((result) => {
                console.log(result.text);
                reset()

                Swal.fire({
                    icon: 'success',
                    title: 'Message sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            })
    }


    return (
        <Grid container
              component={'section'}
              id="contact"
              direction='column'
              alignItems={'center'}
              mt={10}
              mb={10}>
            <SectionHeader title={'Contact'}
                           linePosition={linePositions.rightLeft}
                           justifyContent={'start'}/>
            <Typography variant={'subtitle1'} mt={2} mb={2}>
                Leave a message and I'll get back to you as soon as I can.
            </Typography>
                <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <Stack width={{xs: '100%', sm: 550}} spacing={4} alignItems={'center'}>
                    <Controller
                        name="from_name"
                        control={control}
                        rules={{ required: 'Name is required', minLength: 1 }}
                        render={({ field, fieldState: {  error } }) => (
                            <>
                                <StyledTextField variant='outlined'
                                                 label="Name"
                                                 error={!!error}
                                                 helperText={error && error.message}
                                                 {...field}
                                />
                            </>
                        )}
                    />
                    <Controller
                        name="reply_to"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        }}
                        render={({ field, fieldState: {  error } }) => (
                            <StyledTextField variant='outlined'
                                             label="Email"
                                             error={!!error}
                                             helperText={error && error.message}
                                             {...field}
                            />
                        )}
                    />

                    <Controller
                        name="message"
                        control={control}
                        rules={{ required:  'Message is required' }}
                        render={({ field, fieldState: {  error } }) => (
                            <StyledTextField variant='outlined'
                                             label="Message..."
                                             multiline
                                             rows={4}
                                             error={!!error}
                                             helperText={error && error.message}
                                             {...field}
                            />
                        )}
                    />

                    <BlueButton text={'Send'} type="submit"/>
                    </Stack>

                </form>

        </Grid>
    );
};

export default Contact