import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardInfo({title, body}) {
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: '30px 3%' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default CardInfo;