class informationEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new informationEvent();
        }
        return this.#instance;
    }

    addEventPhotoChangeClick() {
        const infoPhoto = document.querySelector(".info-photo");
        infoPhoto.onclick = () => {
            const photoFile = document.querySelector(".photo-file");
            photoFile.click();
        }
    }
    
    addEventPhotoChange() {
        const photoFile = document.querySelector(".photo-file");
        photoFile.onchange = () => {
            fileService.getInstance().changePhoto();
        }
    }

    addEventAboutMeImport() {
        const modifyButton = document.querySelector(".m-aboutme");
        modifyButton.onclick = () => {
            const saveButton = document.querySelector(".s-aboutme");
            const infoInputContainers = document.querySelectorAll(".info-input-container input");
            saveButton.classList.remove("button-hidden");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.disabled = false;
                modifyButton.classList.add("button-hidden");
            });
        }
    }

    addEventAboutMeSave(){
        const saveButton = document.querySelector(".s-aboutme");
        saveButton.onclick = () => {
            const modifyButton = document.querySelector(".m-aboutme");
            const infoInputContainers = document.querySelectorAll(".info-input-container input");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.disabled = true;
                saveButton.classList.add("button-hidden");
                modifyButton.classList.remove("button-hidden");
            });
        }
    }

    addEventIntroduceImport() {
        const modifyButton = document.querySelector(".m-introduce");

        modifyButton.onclick = () => {
            const saveButton = document.querySelector(".s-introduce");
            const introduceInput = document.querySelector(".introduce-input");
            saveButton.classList.remove("button-hidden");
            introduceInput.disabled = false;
            modifyButton.classList.add("button-hidden");
        }
    }

    addEventIntroduceSave() {
        const saveButton = document.querySelector(".s-introduce");
        saveButton.onclick = () => {
            const modifyButton = document.querySelector(".m-introduce");
            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = true;
            saveButton.classList.add("button-hidden");
            modifyButton.classList.remove("button-hidden");
        }
    }
}

class fileService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new fileService();
        }
        return this.#instance;
    }

    changePhoto() {
        const photoForm = document.querySelector(".photo-form");
        const formData = new FormData(photoForm);
        const fileValue = formData.get("file");
        this.showPreview(fileValue);
    }

    showPreview(fileValue) {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(fileValue);

        fileReader.onload = (e) => {
            const photoImg = document.querySelector(".info-photo img");
            photoImg.src = e.target.result;
        }
    }

}