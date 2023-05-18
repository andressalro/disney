import Pelicula from "../models/pelicula.model";
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
            attributes: ["id"],
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
}
