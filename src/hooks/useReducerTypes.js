import { types } from "../types/types";

const useReducerTypes = ({ type }) => {
  switch (type) {
    case types.normal:
      return "bg-orange-300 text-black";

    case types.fighting:
      return "bg-orange-600 text-white";

    case types.flying:
      return "bg-neutral-500 text-white";

    case types.poison:
      return "bg-lime-500 text-black";

    case types.ground:
      return "bg-amber-900 text-white";

    case types.rock:
      return "bg-yellow-900 text-white";

    case types.bug:
      return "bg-red-900 text-white";

    case types.ghost:
      return "bg-white text-black";

    case types.steel:
      return "bg-gray-800 tex-white";

    case types.fire:
      return "bg-red-600 text-white";

    case types.water:
      return "bg-cya-500 text-white";

    case types.grass:
      return "bg-green-600 text-white";
    case types.electric:
      return "bg-yellow-400 text-black";

    case types.psychic:
      return "bg-teal-800 text-white";

    case types.ice:
      return "bg-sky-400 text-black";
    case types.dragon:
      return "bg-indigo-400 text-black";

    case types.dark:
      return "bg-violet-900 text-white";
    case types.fairy:
      return "bg-fuchsia-900 text-white";

    case types.unknown:
      return "bg-rose-400 text-black";

    case types.shadow:
      return "bg-pink-500 text-black";

    default:
      break;
  }
};

export default useReducerTypes;
