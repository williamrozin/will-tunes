import React, { FC } from 'react'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NotFound: FC = () =>
    <div data-testid='not-found'>
        <div className='home-cover-picture' />
        <Content>
            <div className='display4' style={ { padding: '48px 0 24px' } }>
                404
            </div>
            <div className='display3' style={ { padding: '0 0 36px' } }>
                Page not found
            </div>
            <div className='display2' style={ { padding: '0 0 36px' } }>
                {
                    'The content that you\'ve requested does not exists ' +
                    'or isn\'t available right now.'
                }
            </div>
        </Content>
    </div>

export default NotFound
