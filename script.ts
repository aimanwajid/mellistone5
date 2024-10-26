document.getElementById('resumeForm')?.addEventListener('submit', function(event) {event.preventDefault();
 
    const nameElement = document.getElementById('name')  as HTMLInputElement;
    const emailElement = document.getElementById('email')  as HTMLInputElement;
    const phoneElement = document.getElementById('phone')  as HTMLInputElement;
    const educationElement = document.getElementById('education')  as HTMLInputElement;
    const experienceElement = document.getElementById('experience')  as HTMLInputElement;
    const skillsElement = document.getElementById('skills')  as HTMLInputElement;
            
       const usernameElement = document.getElementById(
          "username"
       ) as HTMLInputElement;
 
 
 
       if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
       usernameElement
 
      
 
         const name =nameElement . value;
         const email =emailElement . value; 
         const phone =phoneElement . value;
         const educatuon = educationElement . value;
         const experience = experienceElement . value;
         const skills = skillsElement . value; 
    
          const username = usernameElement.value;
          const uniquePath = `resumes/${username.replace(/s+/g, '_')}_cv.html`
 
 
 
 
     const resumeOutput =`
         <h2>Resume</h2>
         <p><strong>Name:</strong> <span id= "edit-name" class="editable"> ${name} </span> </p>
          <p><strong>Email:</strong> <span id= "edit-email" class="editable"> ${email } </span> </p>
          <p><strong>Phone:</strong> <span id= "edit-name" class="editable"> ${phone} </span> </p>
           <h3>Education</h3>
           <p id="edit-education" class="editor" > ${educationElement}</p>
           
              <h3>Experience</h3>
            <p id="edit-experience" class="editor" > ${experience}</p>
             <h3>Skills</h3>
            <p id="edit-skills" class="editor" > ${skills}</p>
           
          `;
         
        const downloadlink = document.createElement('a')
        downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
        downloadlink.download = uniquePath;
        downloadlink.textContent = 'Download Your 2024 Resume';
 
 
    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
       resumeOutputElement.innerHTML = resumeOutput;
       //** 
       
      //resumeOutputElement.classList.remove ="hidden";
       const buttonsContainer = document.createElement("div");
       buttonsContainer.id = "buttonsContainer";
       resumeOutputElement.appendChild(buttonsContainer);

       const downloadButton = document.createElement("button");
       downloadButton.textContent = "Download as PDF";
       downloadButton.addEventListener("click", ()=> {
         window.print(); //open the print dialog, allowing the user to save as PDF .

       });
       buttonsContainer.appendChild(downloadButton);


       const shareLinkButton = document.createElement("button");
       shareLinkButton.textContent = "Copy Shareable Link";
       shareLinkButton.addEventListener( "click" , async () => {
         try{
            const shareLinkButton =    `https://yourdomain.com/resumes/${name.replace(
            /s+/g,
            "_"
         
         

       )}_cv.html`;
         await navigator.clipboard.writeText(shareableLLink);
         alert("shareable link copied to clipboard") ;

 
} catch (err){
   console.error("failed to copy link: " , err);
   alert("failed to copy link to clipboard. please try again.");
      
}

});     
       } else {
       console.error("the resume output elements are missing.");
       } 
   
       
       
});
 
 