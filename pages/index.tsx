import NextLink from 'next/link';
import Image from "next/image";
import { Box, Button, Card, Divider, Link, Typography } from "@mui/material";
import { Footer, Layout } from "../components";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Home() {
  return (
    <>
      <Layout>
        <Box sx={{ minWidth: '101vw', backgroundColor: '#ffb703', pt: 1, pb: 1 }} display='flex' justifyContent='center'>
          <Typography variant='subtitle1' sx={{ color: 'black', fontWeight: 'bold' }}>SORTEO AIRPODS PRO 2! 30/12</Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
          <Image src='https://res.cloudinary.com/digb4uo6f/image/upload/v1670088228/Disen%CC%83o_sin_ti%CC%81tulo_4_zh44dg.png'
            height={400}
            width={400}
            alt={""} />
        </Box>
        <Divider sx={{ my: 1, backgroundColor: 'white' }} />

        <Box display='flex' justifyContent='space-around' sx={{ mt: 2, border: '1px solid black' }}>
          <Box sx={{ mb: 2 }}>
            <Accordion sx={{ backgroundColor: 'white' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>¿Cómo funciona?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography textAlign='justify'>
                  Con la compra de la preventa de nuestra Guía Digital accedés a un sorteo solo con el numero de comprobante. Una vez realizada la compra envíanos el comprobante para poder comentarte los pasos a seguir
                </Typography>
              </AccordionDetails>
            </Accordion>

          </Box>
        </Box>
        <Divider sx={{ my: 1, backgroundColor: 'white' }} />
        <Box display='flex' justifyContent='center'>
          <NextLink href='https://paypal.me/jorgeochipinti?country.x=AR&locale.x=es_XC'>
            <Box display='flex' flexDirection='column'>
              <Image src='https://res.cloudinary.com/digb4uo6f/image/upload/v1670259160/pp_fc_hl_uxlaco.svg' width={246} height={60} alt='' />
              <Box sx={{ mt: 2, mb: 2 }} display='flex' justifyContent='center'>
                <Button variant='contained' color='success' sx={{fontWeight:'bold'}}>$3.00 USD</Button>
              </Box>
            </Box>
          </NextLink>
        </Box>
        <Divider sx={{ my: 1, backgroundColor: 'white' }} />
        <Box display='flex' justifyContent='center'>
          <Box display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='center'>
              <AccountBalanceIcon sx={{ fontSize: 35, pb: 1 }} />
            </Box>
            <Typography variant='body1' textAlign='center' sx={{ fontSize: 25 }}>$960</Typography>
            <Typography variant='body1' textAlign='center' >0000003100035912303521</Typography>
            <Typography variant='body1' textAlign='center' >Alias: arglottery</Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 1, backgroundColor: 'white' }} />
        <Box display='flex' justifyContent='center'>
          <Box display='flex' justifyContent='center' sx={{ backgroundColor: 'white', width:150, borderRadius:'10px', mt:3}}>
            <Image src='https://res.cloudinary.com/digb4uo6f/image/upload/v1670257826/icon-128x128_buzgdz.png' width={128} height={128} alt='' />
          </Box>
        </Box>
        <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
          <NextLink href='https://mpago.la/1T5CWun'>
            <Card sx={{ maxWidth: '300px', mt: 5, borderRadius: '12px' }} >
              <Box display='flex' justifyContent='center'>
                <Image src='https://res.cloudinary.com/digb4uo6f/image/upload/v1670092154/2HCH5FW5JRAM3D4JZ4FAZOBJ5Y_d4wwau.webp' width={302} height={200} alt='' />
              </Box>
              <Typography variant='subtitle1' textAlign='center' sx={{ m: 2, fontWeight: 'bold' }}>PREVENTA GUIA DIGITAL + 1 CHANCE PARA AIRPOS PRO 2</Typography>
              <Box display='flex' justifyContent='center' sx={{ mb: 2 }}>
                <Button color='success' variant='contained'>Comprar</Button>
              </Box>
            </Card>
          </NextLink>
          <NextLink href='https://mpago.la/1ztgmGW'>
            <Card sx={{ maxWidth: '300px', mt: 5, borderRadius: '12px' }} >
              <Box display='flex' justifyContent='center'>
                <Image src='https://res.cloudinary.com/digb4uo6f/image/upload/v1670092154/2HCH5FW5JRAM3D4JZ4FAZOBJ5Y_d4wwau.webp' width={302} height={200} alt='' />
              </Box>
              <Typography variant='subtitle1' textAlign='center' sx={{ m: 2, fontWeight: 'bold' }}>PREVENTA GUIA DIGITAL + 2 CHANCE PARA AIRPOS PRO 2</Typography>
              <Box display='flex' justifyContent='center' sx={{ mb: 2 }}>
                <Button color='success' variant='contained'>Comprar</Button>
              </Box>
            </Card>
          </NextLink>
          <NextLink href='https://mpago.la/32gurW'>
            <Card sx={{ maxWidth: '300px', mt: 5, borderRadius: '12px' }} >
              <Box display='flex' justifyContent='center'>
                <Image src='https://res.cloudinary.com/digb4uo6f/image/upload/v1670092154/2HCH5FW5JRAM3D4JZ4FAZOBJ5Y_d4wwau.webp' width={302} height={200} alt='' />
              </Box>
              <Typography variant='subtitle1' textAlign='center' sx={{ m: 2, fontWeight: 'bold' }}>PREVENTA GUIA DIGITAL + 3 CHANCE PARA AIRPOS PRO 2</Typography>
              <Box display='flex' justifyContent='center' sx={{ mb: 2 }}>
                <Button color='success' variant='contained'>Comprar</Button>
              </Box>
            </Card>
          </NextLink>
        </Box>
        <Footer />
      </Layout>
    </>
  )
}
