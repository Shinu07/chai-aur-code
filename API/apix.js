const rqst = "https://api.github.com/users/Shinu07";


fetch(rqst).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    return response.json()
}).then(data => {
    const { avatar_url: profileImage, name, following } = data
    document.querySelector(".card img").setAttribute("src", `${profileImage || 'No image'}`);
    document.querySelector("h3").textContent = `${name || "name not avaliable"}`;
    document.querySelector("p").textContent = `following : ${following||0}`;
}).catch (error=> {
    console.log(`There was a problem with the fetch operation:`,error);
})