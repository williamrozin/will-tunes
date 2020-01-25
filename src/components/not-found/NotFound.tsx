import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NotFound: FC = () =>
    <Content>
        <Typography
            color='primary'
            align='center'
            variant='h1'
            style={ { padding: '48px 0 24px' } }>
            404
        </Typography>
        <Typography
            color='textSecondary'
            align='center'
            variant='h4'
            style={ { padding: '0 0 36px' } }>
            Page not found
        </Typography>
        <Typography
            color='textSecondary'
            align='center'
            variant='h6'
            style={ { padding: '0 0 36px' } }>
            {
                'The content that you\'ve requested does not exists ' +
                'or isn\'t available right now.'
            }
        </Typography>
    </Content>

export default NotFound
