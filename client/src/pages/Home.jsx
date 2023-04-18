import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          {/* header */}
          <motion.header {...slideAnimation("down")}>
            <strong>tShirt</strong>
            {/* <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            /> */}
          </motion.header>
          {/* content */}
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                你的风格，
                <br className="xl:block hidden" />
                你做主！
              </h1>
            </motion.div>

            <motion.div {...headTextAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
                让你的衣服脱颖而出！ <strong>让你的风格闪耀！</strong>
                在这里，你可以自由选择颜色和图案，来自定义一件衣服，让你拥有独一无二的设计！
              </p>
              <CustomButton
                type="filled"
                title="盘它"
                handleClick={() => (state.intro = false)}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
