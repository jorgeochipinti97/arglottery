import NextLink from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Box, Divider, Link, Typography } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';



export const Footer = () => {


    return (
        < >
            <Divider sx={{ my: 1, backgroundColor: 'white' }} />
            <Box >
                <Box display='flex' justifyContent='center'>
                    <NextLink href='https://www.instagram.com/arglottery/' >
                            <Box>
                                <InstagramIcon sx={{ fontSize: 30, color: 'white', ml: 1, mr: 1, cursor:'pointer' }} />
                            </Box>
                    </NextLink>
                    <NextLink href='https://api.whatsapp.com/send?phone=1154950338&text=Hola!%20Quisiera%20consultar%20por%20la%20preventa%20de%20la%20gu%C3%ADa%20digital%20con%20acceso%20al%20sorteo' >
                            <Box> <WhatsAppIcon sx={{ fontSize: 30, color: 'white', ml: 1, mr: 1, cursor:'pointer' }} /></Box>
                    </NextLink>
                </Box>
                <Box display='flex' justifyContent='center' sx={{ mt: 3 }} >
                    <CopyrightIcon sx={{ fontSize: 14 }} /> <Typography component='h5'> all rights reserved. Arglottery</Typography>
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' sx={{ mt: 3, mb: 2 }} >
                <Typography component='h5' fontWeight={650}> Development by Jorge Ochipinti</Typography>
            </Box>
        </>
    )
}