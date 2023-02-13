import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'
import { axiosTest } from '@models'

Main.propTypes = {
    props: PropTypes.object,
}
    
function Main(props){
    const { t } = useTranslation()

    useEffect(() => {
        const { indexStore } = props
        console.log(indexStore,'这是store数据')
        getData()
    }, [])
    const getData = async() => {
        let { code = 200, data = {} } = await axiosTest({user:"1"})
        if(code === 200){
            //.....
        }
    }

   
    return (
        <div className={styles['home']}>{t('h')}</div>
    )
}

export default inject('indexStore')(observer(Main))