import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./infoBox.css"
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}){
   

    const IMG_URL="https://images.unsplash.com/photo-1533757704860-384affeed946?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URl="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="infoBox">
            

              <div className="CardContainer">
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        {info.humidity>60?
        RAIN_URL:
        info.temp<25?
        COLD_URl:
        HOT_URL
         }
        
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span" > 
           <h1> {info.city} {
            info.humidity>60?
            <ThunderstormIcon/>:
            info.temp>25?
            <SunnyIcon/>:
            <SevereColdIcon/>
            }</h1>
          <div>Tempreture: {info.temp}&deg;C</div>
          <div>Max-Temp: {info.tempMax}&deg;C</div>
          <div>Min-Temp: {info.tempMin}&deg;C</div>
          <div>Humidity: {info.humidity}%</div>
          <div> Tempreture described as {info.description} and feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
        </div>
    )
}