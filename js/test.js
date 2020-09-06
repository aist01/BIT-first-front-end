axios.get('http://localhost/wordpress/wp-content/plugins/BIT-first/api/?route=test')
    .then((response) => {  
        console.log(response);
        // displayMessages(response.data);
        // drawIndexInit();
    })
    .catch((error) => {
        console.log(error);
        // displayErrorMessages(error.response.data.errors);
    });