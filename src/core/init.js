
module.exports =  (options) => {
    document.body.style.visibility = 'hidden';
    if(options.load) {
       document.onreadystatechange = () => {
           if(document.readyState === 'complete') {
               options.load();
               document.body.style.visibility = '';
           }
       }; 
    }
}
