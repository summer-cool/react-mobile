import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

Main.propTypes = {
    props: PropTypes.object,
}

function Main(){
    useEffect(() => {
      
    }, [])

   
    return (
        <div className={styles['home']}>111</div>
    )
}

export default inject('indexStore')(observer(Main))