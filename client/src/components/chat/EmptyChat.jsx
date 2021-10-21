import { Box, makeStyles } from '@material-ui/core';
import bgb from "./images/BG1.png";

const useStyle = makeStyles(theme => ({
    component: {
        background: '#f8f9fa',
        padding: '150px 0',
        textAlign: 'center',
        height: '100%'
    },
    container: {
        padding: '0 200px',
        [theme.breakpoints.down('sm')]: {
            padding: -0
        }
    },
    image: {
        width: 400,
        height: 400
    },
    title: {
        fontSize: 36,
        fontWeight: 300,
        color: '#525252',
        marginTop: 25
    },
    subTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.45)'
    },
    divider: {
        margin: '30px 0'
    }
}));

const EmptyChat = () => {
    const classes = useStyle();
   
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={bgb} alt="dp" className={classes.image} />
               
            </Box>
        </Box>
    )
}

export default EmptyChat;