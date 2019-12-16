class Github {
    
    constructor() {
        this.client_id = '140940c0191a62977d2e';
        this.client_secret = '2c0b378b9fb7d532130fe76aa4954a9b9a740088';
        this.repo_count = 4;
    }
   
    async getRepo(userText) {
            const repoResponse= await fetch(`https://api.github.com/search/repositories?q=${userText}&client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repo_count}`);
            
            const repo=await repoResponse.json();
           
            return{
                repo: repo.items
            }
    }
}