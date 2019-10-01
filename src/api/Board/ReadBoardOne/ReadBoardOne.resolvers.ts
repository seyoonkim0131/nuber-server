import Board from 'src/entities/Board';
import { ReadBoardOneResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers'
import { authMiddleware, makeMiddleware } from "../../../utils/middlewares";

interface IArgs {
    no: number;
}

const resolvers:  Resolvers = {
    Query: {
        ReadBoardOne: makeMiddleware( authMiddleware,
            async(_, {no}: IArgs):Promise<ReadBoardOneResponse> => {
                const board: Board | undefined = await Board.findOne(no);
                if(board) {
                    return {
                        ok: true,
                        error: null,
                        board
                    }
                } else {
                    return {
                        ok: false,
                        error: 'error',
                        board: null
                    }
                }
            }
        )
    }
}

export default resolvers