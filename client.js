


const links = document.querySelector("#links")
const linkItem = document.querySelector("#link-item")

const buttonGetLink = document.querySelector("#buttonGetLink")

const inputLink = document.querySelector("#inputLink")

buttonGetLink.addEventListener("click", async (e) => {

    const url = inputLink.value

    await fetchLink(url)
    
})




async function fetchLink(url) {


    const params = new URLSearchParams();

    params.append("url", url);

    const response  = await fetch("https://track.timothedavid.fr?" + params.toString(), {
        method: "POST",
        headers: {
                'accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
        }

    });


    const content = await response.json();

    
    links.style.display = "block";

    navigator.clipboard.writeText(content)
    
    linkItem.innerHTML = content;
    







}