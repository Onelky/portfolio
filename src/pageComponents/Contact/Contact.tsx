import React, {useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";
import Stack from "@mui/material/Stack";
import Swal from 'sweetalert2'
import {Controller, useForm} from "react-hook-form";
import {ContactForm} from "../../types";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import {LinePositions} from "../../utils/constants";
import BlueButton from "../../components/common/BlueButton/BlueButton";

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
    const { control, handleSubmit, reset, getValues, formState: {isValid} } = useForm<ContactForm>({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    const onSubmit = async () => {
        const {name, email, subject, message } = getValues()

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            await Swal.fire({
                icon: 'error',
                title: error
            })
        }
        else {
            reset()
            await Swal.fire({
                icon: 'success',
                title: 'Message sent Successfully'
            })
        }
    }

    useEffect(() => {
        console.log(isValid)
    }, [isValid]);

    return (
        <Grid container
              component={'section'}
              id="contact"
              direction='column'
              alignItems={'center'}
              mt={10}
              mb={10}>
            <SectionHeader title={'Contact'}
                           linePosition={LinePositions.rightLeft}
                           justifyContent={'start'}/>
            <Typography variant={'subtitle1'} mt={2} mb={2}>
                Leave a message and I'll get back to you as soon as I can.
            </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack width={{xs: '100%', sm: 550}} spacing={4} alignItems={'center'}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Required',
                            maxLength: {value: 80, message: 'Name cannot exceed 80 characters'}
                        }}
                        render={({ field, fieldState: {  error } }) => (
                                <StyledTextField variant='outlined'
                                                 label="Name"
                                                 error={!!error}
                                                 helperText={error && error.message}
                                                 {...field}
                                />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Required',
                            pattern: {
                                value: /^[A-Zd._%+-]+@[A-Zd.-]+\.[A-Z]{2,}$/i,
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
                            name="subject"
                            control={control}
                            rules={{ required: 'Required', maxLength: {value: 80, message: 'Subject cannot exceed 80 characters'} }}
                            render={({ field, fieldState: {  error } }) => (
                                <StyledTextField variant='outlined'
                                                 label="Subject"
                                                 error={!!error}
                                                 helperText={error && error.message}
                                                 {...field}
                                />
                            )}
                        />
                    <Controller
                        name="message"
                        control={control}
                        rules={{ required:  'Required', maxLength: {value: 500, message: 'Message cannot exceed 500 characters'} }}
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

                    <BlueButton text={'Send'} type={'submit'} disabled={!isValid} />
                    </Stack>

                </form>

        </Grid>
    );
};

export default Contact