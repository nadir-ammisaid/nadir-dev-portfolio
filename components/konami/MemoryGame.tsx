"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Atom, Braces, Server, Boxes, Coffee, Database } from "lucide-react";

interface MemoryGameProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Card {
  id: string;
  tech: string;
  icon: React.ReactNode;
  isFlipped: boolean;
  isMatched: boolean;
}

const TECH_CARDS = [
  { tech: "React", icon: <Atom size={32} /> },
  { tech: "TypeScript", icon: <Braces size={32} /> },
  { tech: "Node.js", icon: <Server size={32} /> },
  { tech: "Next.js", icon: <Boxes size={32} /> },
  { tech: "Java", icon: <Coffee size={32} /> },
  { tech: "MySQL", icon: <Database size={32} /> },
];

export default function MemoryGame({ isOpen, onClose }: MemoryGameProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initializeGame = () => {
    const duplicatedCards = [...TECH_CARDS, ...TECH_CARDS]
      .map((card) => ({
        id: crypto.randomUUID(),
        tech: card.tech,
        icon: card.icon,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(duplicatedCards);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => initializeGame(), 0);
    }
  }, [isOpen]);

  const handleCardClick = (id: string) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(id) ||
      cards.find((c) => c.id === id)?.isMatched
    ) {
      return;
    }

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      if (firstCard?.tech === secondCard?.tech) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatched: true }
              : card
          )
        );
        setFlippedCards([]);

        if (cards.filter((c) => !c.isMatched).length === 2) {
          setTimeout(() => setIsWon(true), 400);
        }
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const handleRestart = () => {
    initializeGame();
  };

  const handleClose = () => {
    initializeGame();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {!isWon ? (
                <>
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                      Memory Game
                    </h2>
                    <p className="text-gray-600 dark:text-slate-300">
                      Match all the tech pairs!
                    </p>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">
                      Moves: {moves}
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {cards.map((card) => (
                      <motion.button
                        key={card.id}
                        onClick={() => handleCardClick(card.id)}
                        className={`aspect-square rounded-xl flex items-center justify-center text-4xl transition-all
                          ${
                            flippedCards.includes(card.id) || card.isMatched
                              ? "bg-primary-500 dark:bg-primary-600 text-white"
                              : "bg-gray-200 dark:bg-slate-700 text-transparent hover:bg-gray-300 dark:hover:bg-slate-600"
                          }
                          ${card.isMatched ? "opacity-60" : ""}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={card.isMatched}
                      >
                        {(flippedCards.includes(card.id) || card.isMatched) &&
                          card.icon}
                      </motion.button>
                    ))}
                  </div>

                  <button
                    onClick={handleRestart}
                    className="w-full px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors font-medium"
                  >
                    Restart Game
                  </button>
                </>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <motion.div
                    className="text-7xl mb-6"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 360],
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  >
                    🎉
                  </motion.div>

                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    Congratulations!
                  </h2>

                  <p className="text-xl text-gray-600 dark:text-slate-300 mb-2">
                    Perfect memory!
                  </p>

                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-6">
                    Now remember to hire me 😉
                  </p>

                  <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
                    Completed in {moves} moves
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={handleRestart}
                      className="flex-1 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors font-medium"
                    >
                      Play Again
                    </button>
                    <button
                      onClick={handleClose}
                      className="flex-1 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
                    >
                      Back to Portfolio
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
