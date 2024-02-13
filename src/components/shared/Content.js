import classes from './Content.module.css'

const Content = ({id, contentClasses, no, title, description}) => {
    return <div className={`${classes.text} ${contentClasses.text}`} id={id}>
                <div className={classes['text-container']}>
                    <div className={classes['title-area']}>
                        <div className={classes.number}><div className={`${classes['text-number']} ${contentClasses['text-number']}`}>{no}</div>
                        <div className={`${classes.underline} ${contentClasses.underline}`}></div></div>
                    </div>
                    <div className={classes.title}>{title}</div>
                </div>
                <p className={`${classes.description} ${contentClasses.description}`}>{description}</p>
            </div>
}

export default Content