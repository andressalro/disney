import Pelicula from "../models/pelicula.model";
import PersonajePelicula from "../models/persona_pelicula.model";
import Personaje from "../models/personaje.model";
import { errorHandler } from "../utils";

export default class CharactersService {
  constructor() {}

  async getCharacters(args) {
    const { select, selectForeign, filterBase, filterForeign } = args;
    try {
      const characters = await Personaje.findAll({
        where: filterBase,
        include: [
          {
            model: Pelicula,
            where: filterForeign,
            attributes: selectForeign,
            through: {
              attributes: [],
            },
          },
        ],
        attributes: select,
      });
      return characters;
    } catch (error) {
      throw errorHandler(error.message, 400);
    }
  }

  async createCharacter(args) {
    const { body } = args;
    try {
      const character = await Personaje.create(body);
      return character;
    } catch (error) {
      throw errorHandler(error.message, 400);
    }
  }

  async updateCharacter(args) {
    const { id, body } = args;
    try {
      const character = await Personaje.update(body, {
        where: id,
      });
      return character;
    } catch (error) {
      throw errorHandler(error.message, 400);
    }
  }

  async deleteCharacter(args) {
    const { id } = args;
    try {
      const character = await Personaje.destroy({
        where: id,
      });
      return character;
    } catch (error) {
      throw errorHandler(error.message, 400);
    }
  }
}
