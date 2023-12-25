const form = document.querySelector('.carta__form'),
    nome = document.querySelector('.nome'),
    emailRemetente = document.querySelector('.email__remetente'),
    emailDestinatario = document.querySelector('.email__destinatario'),
    msg = document.querySelector('.msg')

//  Alertas do SweetAlert
const alert = (message) => {
    console.log(message)
    if (message == 'OK') {
        Swal.fire({
            title: "Sucesso",
            text: 'Carta Natalina Enviada!',
            icon: "success"
        }).then(() => {
            location.reload()
        });
    } else {
        Swal.fire({
            title: "ERRO",
            text: 'Alguma coisa deu errado!!',
            icon: "error"
        });
    }

}

// Envio de email através do SMTPJS
const sendEmail = (e) => {
    e.preventDefault()

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: emailRemetente.value,
        Password: "CD70A00D7832A0BF8EAE12EA8AE107729A7E",
        To: emailDestinatario.value,
        From: emailRemetente.value,
        Subject: "Carta de Natal",
        Body: `
        <html><div><div dir="ltr"><div>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  
    <style>
      @media only screen and (min-width: 920px) {
  .u-row {
    width: 900px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-30p89 {
    width: 278.01px !important;
  }

  .u-row .u-col-31p66 {
    width: 284.94px !important;
  }

  .u-row .u-col-37p45 {
    width: 337.05px !important;
  }

  .u-row .u-col-100 {
    width: 900px !important;
  }

}

@media (max-width: 920px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } @media (max-width: 480px) { #u_content_image_4 .v-container-padding-padding { padding: 0px 10px 10px 0px !important; } #u_content_heading_1 .v-container-padding-padding { padding: 10px 10px 0px !important; } #u_content_heading_4 .v-container-padding-padding { padding: 10px !important; } #u_content_image_3 .v-container-padding-padding { padding: 10px 0px 10px 10px !important; } }
    </style>
  
  

<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">




  
  
  <table style="border-collapse:collapse;table-layout:fixed;border-spacing:0;vertical-align:top;min-width:320px;Margin:0 auto;background-color:#f9f9f9;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align:top">
    <td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top">
    
    
  
  
    
  
<div class="u-row-container" style="padding:0px;background-image:url(&#39;https://share1.cloudhq-mkt3.net/633ff3a2f05998.png&#39;);background-repeat:no-repeat;background-position:center top;background-color:#b7021a">
  <div class="u-row" style="margin:0 auto;min-width:320px;max-width:900px;word-wrap:break-word;word-break:break-word;background-color:transparent">
    <div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent">
      
      

<div class="u-col u-col-31p66" style="max-width:320px;min-width:284.94px;display:table-cell;vertical-align:top">
  <div style="height:100%;width:100%!important;border-radius:0px">
  <div style="box-sizing:border-box;height:100%;padding:0px;border-top:0px solid transparent;border-left:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-radius:0px">
  
<table id="u_content_image_4" style="font-family:&#39;Cabin&#39;,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="word-break:break-word;padding:10px;font-family:&#39;Cabin&#39;,sans-serif" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tbody><tr>
    <td style="padding-right:0px;padding-left:0px" align="center">
      
      <img align="center" border="0" src="https://share1.cloudhq-mkt3.net/bade5a8468e534.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 264.94px;" width="264.94">
      
    </td>
  </tr>
</tbody></table>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>


<div class="u-col u-col-37p45" style="max-width:320px;min-width:337.05px;display:table-cell;vertical-align:top">
  <div style="height:100%;width:100%!important;border-radius:0px">
  <div style="box-sizing:border-box;height:100%;padding:0px;border-top:0px solid transparent;border-left:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-radius:0px">
  
<table id="u_content_heading_1" style="font-family:&#39;Cabin&#39;,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="word-break:break-word;padding:80px 10px 0px;font-family:&#39;Cabin&#39;,sans-serif" align="left">
        
  
    <h1 style="margin:0px;color:#ffffff;line-height:140%;text-align:center;word-wrap:break-word;font-family:courier new,courier;font-size:60px;font-weight:400"><strong>Feliz</strong></h1>
  

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:&#39;Cabin&#39;,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="word-break:break-word;padding:0px 10px 10px;font-family:&#39;Cabin&#39;,sans-serif" align="left">
        
  
    <h1 style="margin:0px;color:#ffffff;line-height:140%;text-align:center;word-wrap:break-word;font-family:courier new,courier;font-size:40px;font-weight:400"><strong>NATAL!</strong></h1>
  

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:&#39;Cabin&#39;,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="word-break:break-word;padding:10px;font-family:&#39;Cabin&#39;,sans-serif" align="left">
        
  
    <h1 style="margin:0px;color:#ffffff;line-height:140%;text-align:center;word-wrap:break-word;font-family:courier new,courier;font-size:22px;font-weight:400">${msg.value}</h1>
  

      </td>
    </tr>
  </tbody>
</table>

<table id="u_content_heading_4" style="font-family:&#39;Cabin&#39;,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="word-break:break-word;padding:50px 10px 10px;font-family:&#39;Cabin&#39;,sans-serif" align="left">
        
  
    <h1 style="margin:0px;color:#ffffff;line-height:140%;text-align:center;word-wrap:break-word;font-family:courier new,courier;font-size:18px;font-weight:400">Tenha um Feliz Natal,<br>${nome.value}</h1>
  

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>


<div class="u-col u-col-30p89" style="max-width:320px;min-width:278.01px;display:table-cell;vertical-align:top">
  <div style="height:100%;width:100%!important;border-radius:0px">
  <div style="box-sizing:border-box;height:100%;padding:0px;border-top:0px solid transparent;border-left:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-radius:0px">
  
<table id="u_content_image_3" style="font-family:&#39;Cabin&#39;,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="word-break:break-word;padding:10px;font-family:&#39;Cabin&#39;,sans-serif" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tbody><tr>
    <td style="padding-right:0px;padding-left:0px" align="center">
      
      <img align="center" border="0" src="https://share1.cloudhq-mkt3.net/485d6eb0e5a790.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 258.01px;" width="258.01">
      
    </td>
  </tr>
</tbody></table>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>

      
    </div>
  </div>
  </div>
  
    
    


  
  
    
  
<div class="u-row-container" style="padding:0px;background-image:url(&#39;https://share1.cloudhq-mkt3.net/e42e9c1e1c891c.png&#39;);background-repeat:no-repeat;background-position:center top;background-color:#b7021a">
  <div class="u-row" style="margin:0 auto;min-width:320px;max-width:900px;word-wrap:break-word;word-break:break-word;background-color:transparent">
    <div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent">
      
      

<div class="u-col u-col-100" style="max-width:320px;min-width:900px;display:table-cell;vertical-align:top">
  <div style="height:100%;width:100%!important;border-radius:0px">
  <div style="box-sizing:border-box;height:100%;padding:0px;border-top:0px solid transparent;border-left:0px solid transparent;border-right:0px solid transparent;border-bottom:0px solid transparent;border-radius:0px">
  
<table style="font-family:&#39;Cabin&#39;,sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td class="v-container-padding-padding" style="word-break:break-word;padding:0px;font-family:&#39;Cabin&#39;,sans-serif" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tbody><tr>
    <td style="padding-right:0px;padding-left:0px" align="center">
      
      <img align="center" border="0" src="https://share1.cloudhq-mkt3.net/ee319348465717.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 900px;" width="900">
      
    </td>
  </tr>
</tbody></table>

      </td>
    </tr>
  </tbody>
</table>

  </div>
  </div>
</div>

      
    </div>
  </div>
  </div>
  
    
    


    
    </td>
  </tr>
  </tbody>
  </table>
  
  



</div></div>
</body></div></html>
        `
    }).then(
        message => alert(message)
    );
}