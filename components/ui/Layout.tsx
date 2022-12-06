import { Box } from '@mui/system'
import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Arglottery || Home</title>
            </Head>
            <Box>
                {children}
            </Box>
        </>

    )
}
