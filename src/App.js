import "./App.css"
import Childs from "./profile/Childs";

import Welcome from "./profile/Welcome";


function App() {
  
  return (
    <div className="App">
      <h1 style={{color: 'red', textAlign:'center'}} > welcome to props </h1>

    <Welcome fullname='Mohamed'/>

    <Childs> <h4>Im a child props</h4></Childs>


<div className='Profile'>

    <profile fullName='medecin generaliste' bio='medicale' profession='docteur'><img src ='https://www.sinstaller-en-profession-liberale.fr/uploads/sid_added_pages/.thumbs/medecin-ordi-02_d0ba70.jpg' alt='img'/></profile>
    <profile fullName='medecin specialiste' bio='medicale' profession='docteur'><img src ='https://uploads.unify.uno/content/2022/7/3/stomatologue-930158e5bd671ac7.jpeg' alt='img'/></profile>
    <profile fullName='medecin moderne' bio='medicale' profession='docteur' ><img src ='https://www.nexans.com/.imaging/mte/nexans-theme/1590x894/dam/nexans-com/content-images/business/healthcare_therapy_image.jpg/jcr:content/cover_case_study_microcables3.jpg' alt='img'/></profile>
    

</div>


    </div>
  );
}

export default App
