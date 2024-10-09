
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import SingleImage from '../Components/singleImageDetails/SingleImage'

function App() {

const [imageListState,setImageListState] = useState({
      imageListUrl:'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20',
      images:[]

})

async function ImgaeDownload(){
    const response = await axios.get(imageListState.imageListUrl)
    
    const photoList = response.data.photos 
    console.log(photoList);
    
   const list =  photoList.map(i => i.url)

   const pictures = await axios.all(list)
  setImageListState({...imageListState,images:pictures})
   

    
    
    
}

useEffect(()=>{
  ImgaeDownload()
})


return(
<>


{
  imageListState.images.map((url)=> 
    <SingleImage
    url={url}
    />
  )
}


</>
)
}

export default App
