<template>
  <div class="contact">
    <h1>Contact us </h1>
    <div v-for="contact in contacs" :key="contact.phone"  :email="contact.email" :address="contact.address">
  <p> {{contact.department}}: <br> Tel: {{contact.phone}} <br> Email: {{contact.email}} <br> Address: {{contact.address}} </p>
  </div>  
  </div>
</template>

<script>
export default {
    name: "contact",
data(){
    return{
contacs:[
        {department: "Tartu", phone: "+372 5676 8765", email: "green@green.com", address: "Riia 2, Tartu"},
        {department: "Pärnu", phone: "+372 5678 3456", email: "hr@green.com", address: "Veski 15, Pärnu"},
]
}
} 
}
</script>