$(() => {
    const Mailchimp = {
      API_KEY: 'API_KEY', 
      API_LIST: 'API_LIST',
      API: `https://us3.api.mailchimp.com/3.0/lists/${API_LIST}/`,
    };
  
  $.get({
    headers: {
        authorization: `Bearer ${Mailchimp.API_KEY}`,
    },
    url: `${Mailchimp.API}`,
  
    })
    .fail(()=> {
      console.error('ERRRRRRRRROOOOOOORRRRRR');
    })
    .done((response)=>{
      console.log(response);
    })
    .done((data)=>{
      console.log('good');
      let name;
      $.each(data.members, (i)=> {
        name = (data.members[i].email_address);
    
        console.log('good2');
        
        $('.list').append(`<p class="name" >name: ${name}</p>`)
  
        console.log(name);
      });
    });
  });
  