import { Router } from "express";
import { getClubs } from "./controllers/clubs-controllers";
import { createPlayer, deletePlayer, getPlayer, getPlayerById, updatePlayer } from "./controllers/players-controllers";

const router = Router();

router.get( "/players", getPlayer )
router.get( "/players/:id", getPlayerById )
router.post( "/players", createPlayer )

router.delete( "/players/:id", deletePlayer )
router.patch( "/players/:id", updatePlayer )


router.get( "/clubs", getClubs )

export default router;