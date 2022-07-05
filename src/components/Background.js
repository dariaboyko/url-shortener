import classes from "./Background.module.css"
import { useSpring, animated } from "react-spring";
function Background(props) {
  return (
    <div className={classes.blackback}>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0.5, marginTop: 600, marginBottom: -600, right: 0 },
          config: { duration: 1000 },

          to: { opacity: 1, marginBottom: 0, marginTop: -30, right: 0 },
          leave: { opacity: 0 },
        })}
      >
        7 8 9 7 4 3 9 7 2 9 1 5 9 3 9 1 8 3 9 0 5 8 0 2 1 0 3 7 8 9 7 4 3 9 7 2
        9 1 5 9 3 9 1 8 3 9 0 5 8 0 2 1 0 3
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0.2, marginTop: 600, marginBottom: -600, right: 14 },
          config: { duration: 1500 },

          to: {
            opacity: 0.7,
            marginBottom: 0,
            marginTop: 0,
            right: 14,
            top: 20,
          },
          leave: { opacity: 0 },
        })}
      >
        9 0 5 8 0 2 1 0 3 7 8 9 7 4 3 9 7 2 9 1 5 9
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 26 },
          config: { duration: 600 },

          to: { opacity: 0.5, marginBottom: 0, marginTop: -30, right: 26 },
          leave: { opacity: 0 },
        })}
      >
        4 6 5 3 1 2 3 5 5 7 8 5 3 0 7 3 6 5 4 6 5 5 3 2 4 3 6 9 4 8 5 0
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 44 },
          config: { duration: 1500 },

          to: { opacity: 1, marginBottom: 0, marginTop: -30, right: 44 },
          leave: { opacity: 0 },
        })}
      >
        5 4 6 5 5 3 2 4
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 70 },
          config: { duration: 1100 },

          to: { opacity: 0.5, marginBottom: 0, marginTop: -30, right: 70 },
          leave: { opacity: 0 },
        })}
      >
        5 4 6 5 5 3 2 4 3 6 9 4 8 5 0 4 6 3 9 7 2 9 1 5
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0.5, marginTop: 600, marginBottom: -600, right: 85 },
          config: { duration: 1000 },

          to: { opacity: 0.9, marginBottom: 0, marginTop: -10, right: 85 },
          leave: { opacity: 0 },
        })}
      >
        7 8 9 7 4 3 9 7 2 9 1 5 9 3 9 1 8 3 9 0 5 8 0 2 1 0 3 7 8 9 7 4 3 9 7 2
        9 1 5 9 3 9 1 8 3 9 0 5 8 0 2 1 0 3
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 90 },
          config: { duration: 1800 },

          to: { opacity: 0.6, marginBottom: 0, marginTop: -30, right: 90 },
          leave: { opacity: 0 },
        })}
      >
        7 8 9 7 4 3 9 7 9 1 5 9 3 9 1 8 3 9 0 5 8 0 2 1 0 3
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 120 },
          config: { duration: 1000 },

          to: { opacity: 1, marginBottom: 0, marginTop: -30, right: 120 },
          leave: { opacity: 0 },
        })}
      >
        7 8 9 7 4 3 9 7 2 9 1 5 9 3 9 1 8 3 9
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 1000, marginBottom: -1000, right: 133 },
          config: { duration: 1700 },

          to: { opacity: 0.8, marginBottom: 0, marginTop: 0, right: 133 },
          leave: { opacity: 0 },
        })}
      >
        6 9 4 8 5 0 4 6 3 9 5 9 3 9 1 8 0 3 9 0 5 8 0 2 1 0 3 7 8 9 7 4 3 9
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: {
            opacity: 0.2,
            marginTop: 600,
            marginBottom: -600,
            right: 143,
          },
          config: { duration: 1500 },

          to: {
            opacity: 0.7,
            marginBottom: 0,
            marginTop: 0,
            right: 143,
            top: 20,
          },
          leave: { opacity: 0 },
        })}
      >
        9 0 5 8 0 2 1 0 3 7 8 9 7 4 3 9 7 2 9 1 5 9
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 159 },
          config: { duration: 600 },

          to: { opacity: 0.5, marginBottom: 0, marginTop: -30, right: 159 },
          leave: { opacity: 0 },
        })}
      >
        4 6 5 3 1 2 3 5 5 7 8 5 3 0 7 3 6 5 4 6 5 5 3 2 4 3 6 9 4 8 5 0
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 170 },
          config: { duration: 1500 },

          to: { opacity: 1, marginBottom: 0, marginTop: 0, right: 170 },
          leave: { opacity: 0 },
        })}
      >
        5 4 6 5 5 3 2 4
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 176 },
          config: { duration: 1100 },

          to: { opacity: 0.5, marginBottom: 0, marginTop: 0, right: 176 },
          leave: { opacity: 0 },
        })}
      >
        5 4 6 5 5 3 2 4 3 6 9 4 8 5 0 4 6 3 9 7 2 9 1 5
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 194 },
          config: { duration: 1900 },

          to: { opacity: 0.3, marginBottom: 0, marginTop: 0, right: 194 },
          leave: { opacity: 0 },
        })}
      >
        5 4 2 5 8 5 8 6 4 7 6 3 6 5 5 3 2 4 3 6 9 4 8 5 0 4 6 3 9 7 2 9 1 5 0 9
        3 0 3
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 202 },
          config: { duration: 1100 },

          to: { opacity: 0.5, marginBottom: 0, marginTop: 0, right: 202 },
          leave: { opacity: 0 },
        })}
      >
        5 4 6 5 5 3 2 4 3 6 9 4 8 5 0 4 6 3 9 7 2 9 1 5
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 600, marginBottom: -600, right: 230 },
          config: { duration: 1900 },

          to: { opacity: 0.3, marginBottom: 0, marginTop: 0, right: 230 },
          leave: { opacity: 0 },
        })}
      >
        9 0 3 2 4 3 6 9 4 8 5 0 4 6 3 9 7 2 9 1 5 0 9 3 0 3
      </animated.div>
      <animated.div
        className={classes.numbers}
        style={useSpring({
          from: { opacity: 0, marginTop: 1000, marginBottom: -1000, right: 236 },
          config: { duration: 2000 },

          to: { opacity: 0.2, marginBottom: 0, marginTop: 0, right: 236 },
          leave: { opacity: 0 },
        })}
      >
        6 9 4 8 5 0 4 6 3 9 7 2 9 1 5 0 9 3 0 3
      </animated.div>
      {props.children}
    </div>
  );
}

export default Background;
