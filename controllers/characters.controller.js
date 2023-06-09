import {
  bodyCreateCharacter,
  paramIdCharacter,
  queryCharacters,
} from "../schemas/characters.schema";
import { CharactersService } from "../services";

const characterService = new CharactersService();
export const getCharacters = async (req, res) => {
  let filters = queryCharacters.parse(req.query);
  let filterBase = {};
  let filterForeign = {};
  for (const [key, value] of Object.entries(filters)) {
    if (key == "name") filterBase.nombre = value;
    if (key == "age") filterBase.edad = value;
    if (key == "weight") filterBase.peso = value;
    if (key == "movie") filterForeign.id = value;
  }
  const result = await characterService.getCharacters({
    select: ["nombre", "imagen"],
    selectForeign: [],
    filterBase,
    filterForeign,
  });
  res.json(result);
};

export const getCharacter = async (req, res) => {
  const id = paramIdCharacter.parse(req.params);
  const result = await characterService.getCharacters({
    select: ["nombre", "edad", "peso", "historia", "imagen"],
    selectForeign: ["imagen", "titulo", "createdAt"],
    filterBase: { ...id },
    filterForeign: {},
  });
  res.json(result);
};

export const postCreateCharacter = async (req, res) => {
  const body = bodyCreateCharacter.parse(req.body);
  const result = await characterService.createCharacter({ body });
  res.json(result);
};

export const putEditCharacter = async (req, res) => {
  const id = paramIdCharacter.parse(req.params);
  const body = bodyCreateCharacter.parse(req.body);
  const result = await characterService.updateCharacter({ id, body });
  res.json(result);
};

export const deleteCharacter = async (req, res) => {
  const id = paramIdCharacter.parse(req.params);
  const result = await characterService.deleteCharacter({ id });
  res.json(result);
};
