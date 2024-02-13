import Content from '../shared/Content'
import classes from './page.module.css'
import athletClasses1 from './athlet1.module.css';
import athletClasses2 from './athlet2.module.css';
import athletClasses3 from './athlet3.module.css';

const athletData = [
    {
        id: 'athlet-1',
        contentClasses: athletClasses1,
        no: '01',
        title: 'CONNECTION',
        description: 'Connect with coaches directly, you can ping coaches to view profile.',
    },
    {
        id: 'athlet-2',
        contentClasses: athletClasses2,
        no: '02',
        title: 'COLLABORATION',
        description: 'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
    },
    {
        id: 'athlet-3',
        contentClasses: athletClasses3,
        no: '03',
        title: 'GROWTH',
        description: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ',
    },
]

const AthletPage = () => {
    return <div className={classes.container}>
                <div className={classes['image-container']}>
                    <img className={classes.img} src="/images/footballer.png" alt="footballer image"/>
                </div>
                <div className={classes.header}>
                    ATHLETS
                </div>
                <div className={classes.content}>
                    {
                        athletData.map(data => <Content key={data.id} {...data} />)
                    }        
                </div>
            </div>
}
export default AthletPage