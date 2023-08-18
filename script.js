document.getElementById('loadMore').addEventListener('click', function() {
    
    const skillsSection = document.querySelector('section:nth-child(3) ul');

   
    const newSkills = ['backend develober'];

    
    newSkills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsSection.appendChild(listItem);
    });

    
    this.style.display = 'none';
});
