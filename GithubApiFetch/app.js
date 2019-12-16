//init Github
const gitRepo = new Github();
const ui = new UI();
//Search Repo
const searchRepo = document.querySelector('.searchGitHub');
searchRepo.addEventListener('keyup',e=>{
    //get input text
    const userTex=e.target.value;
    

    if(userTex !==''){
        //http call to
        gitRepo.getRepo(userTex).then(data=>{
            //display results
        
            ui.showRepo(data.repo);
        });
    }
    else{
        ui.clearProfile();
    }
});
 