var src = ["https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=4610e103-b0a8-4ce9-bfc2-1670326d41bf", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=b7ea449f-bd04-40bf-a7a7-759e3ddf549c", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=cf222bf5-902c-4a44-9c07-8457ff79dde7", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=463e5aec-cb43-4ef8-ae77-32d4e5157cbd", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=1d59eeff-3f15-4931-aed8-6ee36fcdde42", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=1cce7b64-7b7c-4ce8-935d-1a73d88356d7", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=d322439f-c5d4-4b53-ae6f-936bd7dabfda", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=27b03540-747f-451a-8132-5668c3684aa4", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=17914877-ce93-4417-822a-17209b972ad5", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=5531db85-84ab-41d0-b8a9-e12f059d70ec", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=d3d410e9-df0d-4da6-921a-20bd9fcf5568", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=bfad0394-0446-407f-a1e4-ac205eab4992", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=316a6368-5a0f-4585-b528-70a5a46175b9", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=e2ae8f50-4f62-4118-becb-bc68c66fd7d7", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=277542bb-ece0-4968-9de9-03a6c5670f2f", "https://player-vz-0d13babb-051.tv.pandavideo.com.br/embed/?v=73e4b001-f028-45fd-933c-3ed00408f071"]

var video;
var numero;

function enviar(num) {
   video = document.getElementById("panda-4610e103-b0a8-4ce9-bfc2-1670326d41bf")
   video.setAttribute("src", src[num]);
   numero = num;
}



function proximo() {
   
      video.setAttribute("src", src[numero + 1]);

}