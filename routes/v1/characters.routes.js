import { characterController } from "../../controllers";
import { AsyncWrapper } from "../../utils";

export default (router) => {
  router.post(
    "/character",
    AsyncWrapper(characterController.postCreateCharacter)
  );
  router.get("/character/:id", AsyncWrapper(characterController.getCharacter));
  router.get("/characters", AsyncWrapper(characterController.getCharacters));
  router.delete(
    "/character/:id",
    AsyncWrapper(characterController.deleteCharacter)
  );
  router.put(
    "/character/:id",
    AsyncWrapper(characterController.putEditCharacter)
  );
};
