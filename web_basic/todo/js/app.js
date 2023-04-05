window.onload = () => {
    AsideEvent.getInstance().addEventShowMenuButton();
    AsideEvent.getInstance().addEventMainChange();
    InformationService.getInstance().loadInfo();
    informationEvent.getInstance().addEventPhotoChangeClick();
    informationEvent.getInstance().addEventPhotoChange();
    informationEvent.getInstance().addEventAboutMeModifyClick();
    informationEvent.getInstance().addEventAboutMeSaveClick();
    informationEvent.getInstance().addEventIntroduceModifyClick();
    informationEvent.getInstance().addEventIntroduceSaveClick();
    TodoService.getInstance();
    TodoEvent.getInstance().addEventAddTodoClick();
    TodoEvent.getInstance().addEventAddTodoKeyUp();
}