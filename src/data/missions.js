// Complete Mission Data with Extended Content for 1.5 Hour Engagement

export const STUDENTS = [
  { id: 'zander', name: 'Zander', avatar: '/assets/avatars/zander.png', color: 'from-blue-500 to-cyan-500' },
  { id: 'zeke', name: 'Zeke', avatar: '/assets/avatars/zeke.png', color: 'from-green-500 to-emerald-500' },
  { id: 'obi', name: 'Obi', avatar: '/assets/avatars/obi.png', color: 'from-purple-500 to-violet-500' },
  { id: 'jedi', name: 'Jedi', avatar: '/assets/avatars/Jedi.png', color: 'from-orange-500 to-amber-500' }
];

export const COACH = {
  name: 'Coach Cisco',
  avatar: '/assets/avatars/coach.png',
  title: 'Head Instructor',
  quote: "Safety first, fun second, rockets third!"
};

export const MISSIONS = [
  {
    week: 1,
    title: "Force & Motion",
    objective: "Establish safety norms and explore push/pull forces.",
    activities: [
      { id: 'safety', name: 'Safety Orientation Video', duration: 10, type: 'watch' },
      { id: 'paper-plane', name: 'Paper Airplane Launch Test', duration: 25, type: 'build' },
      { id: 'push-pull', name: 'Push/Pull Force Games', duration: 20, type: 'activity' },
      { id: 'journal', name: 'Reflection: What is Force?', duration: 10, type: 'write' },
      { id: 'quiz', name: 'Week 1 Knowledge Check', duration: 15, type: 'quiz' }
    ],
    safetyRule: "Always wear eye protection during 'pop' demos. Never point paper rockets at people!",
    content: `Welcome to the Academy, Cadet! Before we touch rockets, we must understand FORCE.

A force is a PUSH or a PULL. Everything in the universe follows these rules:

📌 GRAVITY pulls us DOWN toward Earth
📌 A rocket motor PUSHES us UP toward space
📌 Your muscles PUSH the rocket when you throw it
📌 Air PUSHES against the rocket (this is called DRAG)

Did you know? Sir Isaac Newton discovered the laws of motion over 300 years ago. His First Law says: "An object at rest stays at rest unless a force acts on it."

Translation: Your rocket won't move until YOU push it!

FUN FACT: The force of gravity on Earth is 9.8 meters per second squared. That means every second something falls, it goes 9.8 m/s faster!`,
    project: "Straw Rocket Prep",
    type: "Theory",
    reflectionPrompt: "Draw a picture showing two forces acting on a rocket. Label which force is a PUSH and which is a PULL.",
    coachTip: "Make sure kids understand that FORCE has direction. Ask them: 'Which way isgravity pulling? Which way should the rocket push?'"
  },
  {
    week: 2,
    title: "Straw Rockets",
    objective: "Build and test paper straw rockets; test one variable.",
    activities: [
      { id: 'build', name: 'Build Rocket Tube', duration: 20, type: 'build' },
      { id: 'fins', name: 'Attach Fins (3-4 fins)', duration: 20, type: 'build' },
      { id: 'test', name: 'Test Launch - Try 3 Times', duration: 20, type: 'launch' },
      { id: 'measure', name: 'Measure Your Distance', duration: 15, type: 'measure' },
      { id: 'journal', name: 'Reflection: What Changed?', duration: 10, type: 'write' },
      { id: 'quiz', name: 'Week 2 Knowledge Check', duration: 15, type: 'quiz' }
    ],
    safetyRule: "Stand clear of the launch area—no running! Wait for 'ALL CLEAR' before retrieving rockets.",
    content: `Today we build our first AIR-POWERED rockets! We use our own BREATH to provide the THRUST.

✈️ THE BUILD:
- Roll your paper around the straw (not too tight!)
- Tape the seam so air doesn't escape
- Attach 3-4 fins at the bottom (they keep it straight)
- Add a nose cone (makes it aerodynamic)

🎯 TESTING VARIABLES:
What happens if you change ONE thing?
- Bigger fins = more stability, more drag
- Smaller fins = less drag, might wobble
- Heavier nose = flies straighter
- Lighter nose = might tumble

RECORD YOUR RESULTS:
Trial 1: ________ meters
Trial 2: ________ meters
Trial 3: ________ meters

Which trial flew the farthest? WHY do you think that happened?`,
    project: "Paper Straw Rocket",
    type: "Build",
    reflectionPrompt: "What happened when you changed the fin size? Did bigger fins help or hurt? Draw your best rocket design.",
    coachTip: "Encourage kids to test ONE variable at a time. This is the scientific method in action!"
  },
  {
    week: 3,
    title: "Balloon Rockets",
    objective: "Use balloons and strings to test thrust and payload.",
    activities: [
      { id: 'thrust', name: 'Thrust Test - Basic Balloon', duration: 15, type: 'launch' },
      { id: 'payload', name: 'Heavy Lift Challenge', duration: 25, type: 'challenge' },
      { id: 'string', name: 'Stabilizing Strings Setup', duration: 15, type: 'build' },
      { id: 'race', name: 'Balloon Rocket Race', duration: 20, type: 'activity' },
      { id: 'journal', name: 'Reflection: Action & Reaction', duration: 10, type: 'write' },
      { id: 'quiz', name: 'Week 3 Knowledge Check', duration: 15, type: 'quiz' }
    ],
    safetyRule: "Hold the guide string taut so the rocket doesn't wobble! Beware of popping balloons.",
    content: `ACTION AND REACTION! This is Newton's THIRD LAW:

"For every ACTION, there is an equal and opposite REACTION."

🎈 HOW IT WORKS:
- Air ESCAPES the balloon (ACTION) ←←←
- The balloon MOVES FORWARD (REACTION) →→→

PAYLOAD CHALLENGE:
How much WEIGHT can your air engine lift?
- Try 1 paperclip
- Try 3 paperclips  
- Try 5 paperclips

At what point does it stop moving? Why?

PRO TIP: The more air you blow in, the more thrust you get! But the balloon also gets heavier...

ENGINEERS call this the "thrust-to-weight ratio." NASA uses this for REAL rockets!`,
    project: "Balloon Payload Rocket",
    type: "Build",
    reflectionPrompt: "How much weight could your balloon lift? What happened when you added too much? Draw a diagram showing ACTION and REACTION arrows.",
    coachTip: "This is a great visual demonstration of Newton's Third Law. Make the connection to how real rockets work!"
  },
  {
    week: 4,
    title: "Stomp Rockets",
    objective: "Launch stomp rockets and track altitude.",
    activities: [
      { id: 'assembly', name: 'PVC Launcher Assembly', duration: 20, type: 'build' },
      { id: 'stomp', name: 'Stomp Launch Practice', duration: 20, type: 'launch' },
      { id: 'altitude', name: 'Altitude Tracking Challenge', duration: 25, type: 'measure' },
      { id: 'competition', name: 'Highest Flight Contest', duration: 20, type: 'competition' },
      { id: 'journal', name: 'Reflection: Mechanical Pressure', duration: 10, type: 'write' },
      { id: 'quiz', name: 'Week 4 Knowledge Check', duration: 15, type: 'quiz' }
    ],
    safetyRule: "Only one stomper at a time. All others stay 10ft back. Never stomp without the safety cap on!",
    content: `We're moving to MECHANICAL PRESSURE! By STOMPING on a bottle, we compress air to blast our paper rockets HIGH.

⚡ HOW IT WORKS:
1. You STOMP → bottle FLATTENS
2. Air gets SQUEEZED (compressed!)
3. Air needs ESCAPE → goes up the tube
4. Air HITS the rocket → ZOOOOOM!

📏 TRACKING ALTITUDE:
Use the "fist method" to estimate height:
- Hold your fist at arm's length
- Count how many "fists" high the rocket goes
- 1 fist ≈ 10 degrees of angle

CHALLENGE LEVELS:
🥉 Bronze: Rocket flies over the tree line
🥈 Silver: Rocket reaches 30 meters
🥇 Gold: Rocket reaches 50 meters!

SAFETY CHECK: Make sure the launch tube cap is secure. A flying cap is a dangerous projectile!`,
    project: "Paper Stomp Rocket",
    type: "Build",
    reflectionPrompt: "Estimate how high your rocket flew using the fist method. What would make it fly higher? Draw your rocket at its highest point.",
    coachTip: "Emphasize the difference between air pressure (stomp rockets) vs. chemical rockets (real model rockets next week)."
  },
  {
    week: 5,
    title: "Design Challenge",
    objective: "Apply knowledge to maximize height or distance.",
    activities: [
      { id: 'plan', name: 'Strategy Planning Session', duration: 15, type: 'plan' },
      { id: 'prototype', name: 'Build Prototype Rocket', duration: 30, type: 'build' },
      { id: 'test', name: 'Test and Refine (3 iterations)', duration: 25, type: 'test' },
      { id: 'compare', name: 'Peer Comparison Challenge', duration: 20, type: 'competition' },
      { id: 'journal', name: 'Reflection: Engineering Choices', duration: 10, type: 'write' },
      { id: 'quiz', name: 'Week 5 Knowledge Check', duration: 15, type: 'quiz' }
    ],
    safetyRule: "Review debris zone. Ensure helmets/goggles are strapped. Check that all rockets are recovered before next launch.",
    content: `ENGINEERING CHALLENGE TIME! Choose your path, Commander:

🎯 PATH A: DISTANCE SPECIALIST
Goal: Make your rocket fly as FAR as possible
Strategy: 
- Sleek, aerodynamic design
- Minimal drag
- 3 small fins
- Pointed nose cone

🚀 PATH B: ALTITUDE SPECIALIST  
Goal: Make your rocket fly as HIGH as possible
Strategy:
- Stable, balanced design
- 4 medium fins
- Slightly heavier nose
- Straight body tube

⚖️ THE ENGINEER'S TRADE-OFF:
Distance rockets sacrifice stability for speed.
Altitude rockets sacrifice speed for stability.

THERE IS NO PERFECT DESIGN - only the right design for your MISSION.

This is what REAL aerospace engineers do every day!`,
    project: "Custom Hybrid Rocket",
    type: "Challenge",
    reflectionPrompt: "Which path did you choose - distance or altitude? Why? What design choices did you make? If you could do it again, what would you change?",
    coachTip: "This is the capstone of the straw/balloon rocket unit. Encourage kids to explain their engineering choices."
  },
  {
    week: 6,
    title: "Model Theory",
    objective: "Learn the anatomy of a professional model rocket.",
    activities: [
      { id: 'anatomy', name: 'Rocket Anatomy Lesson', duration: 20, type: 'watch' },
      { id: 'quiz-anatomy', name: 'Anatomy Identification Quiz', duration: 15, type: 'quiz' },
      { id: 'simulation', name: 'Launch Simulation Game', duration: 25, type: 'interactive' },
      { id: 'safety-key', name: 'Safety Key Certification', duration: 15, type: 'certification' },
      { id: 'journal', name: 'Reflection: Real vs. Toy Rockets', duration: 10, type: 'write' },
      { id: 'quiz', name: 'Week 6 Knowledge Check', duration: 15, type: 'quiz' }
    ],
    safetyRule: "Never handle an actual motor without an adult present. Model rocket engines are NOT toys!",
    content: `Time for the BIG LEAGUES! We're learning about REAL model rockets now.

🔬 THE FOUR MAIN PARTS:

1️⃣ NOSE CONE
- Pointy top part
- Cuts through air (aerodynamic!)
- Usually removable for parachute access

2️⃣ BODY TUBE
- Main structure
- Holds the engine and parachute
- Made of lightweight cardboard or plastic

3️⃣ FINS
- Usually 3 or 4 at the bottom
- Keep the rocket stable
- Must be precisely aligned!

4️⃣ LAUNCH LUG
- Small tube on the side
- Slides onto the launch rod
- Removed after launch

🧠 CENTER OF GRAVITY (CG) vs. CENTER OF PRESSURE (CP):
- CG = where the weight balances
- CP = where the air pressure balances
- For stable flight: CG must be AHEAD of CP!

FUN FACT: NASA uses the same principles for their rockets!`,
    project: "Digital Simulation",
    type: "Theory",
    reflectionPrompt: "Draw a model rocket and label all four parts. Explain in your own words why the Center of Gravity must be ahead of the Center of Pressure.",
    coachTip: "This is critical theory before handling real model rockets. Don't rush this week!"
  },
  {
    week: 7,
    title: "The Big Build",
    objective: "Assemble a Class-1 Model Rocket Kit.",
    activities: [
      { id: 'unbox', name: 'Kit Inventory Check', duration: 10, type: 'checklist' },
      { id: 'fins', name: 'Fin Alignment and Gluing', duration: 25, type: 'build' },
      { id: 'shock', name: 'Shock Cord Knotting', duration: 15, type: 'build' },
      { id: 'lug', name: 'Launch Lug Attachment', duration: 10, type: 'build' },
      { id: 'paint', name: 'Paint and Decorate', duration: 25, type: 'creative' },
      { id: 'inspection', name: 'Coach Inspection', duration: 15, type: 'certification' }
    ],
    safetyRule: "Use adhesives carefully. Sand edges away from your face. Work in a well-ventilated area.",
    content: `Precision construction = Successful flight! We're building the Estes Alpha III today.

📋 BUILD CHECKLIST:

□ FINS must be:
  - Equally spaced (use the fin guide!)
  - Perpendicular to body tube
  - Glued securely (no gaps)
  - Sanded smooth (no rough edges)

□ SHOCK CORD must be:
  - Tied with a strong knot
  - Attached to both body tube and nose cone
  - Protected from engine heat

□ LAUNCH LUG must be:
  - Straight and parallel to body
  - Glued between two fins
  - Not blocked at either end

□ PAINT must be:
  - Light (heavy paint = less altitude!)
  - Dry completely before launch
  - Your personal design!

⚠️ COMMON MISTAKES:
- Crooked fins = corkscrew flight
- Weak shock cord = lost rocket
- Heavy paint = poor performance

Take your time. Quality over speed!`,
    project: "Estes Model Alpha III",
    type: "Build",
    reflectionPrompt: "What was the hardest part of the build? How did you make sure your fins were aligned? Take a photo of your finished rocket and describe it.",
    coachTip: "Walk around and check each kid's fin alignment before the glue sets. This is the most common failure point."
  },
  {
    week: 8,
    title: "Countdown Rehearsal",
    objective: "Prepare for launch and practice safety protocols.",
    activities: [
      { id: 'engine', name: 'Engine Insertion Practice', duration: 15, type: 'practice' },
      { id: 'parachute', name: 'Parachute Fold Practice', duration: 20, type: 'practice' },
      { id: 'launch', name: 'Launch Rod Setup', duration: 15, type: 'practice' },
      { id: 'countdown', name: 'Voice Countdown Rehearsal', duration: 15, type: 'practice' },
      { id: 'recovery', name: 'Recovery Zone Drill', duration: 20, type: 'drill' },
      { id: 'quiz', name: "Pre-Launch Safety Quiz (Must Pass!)", duration: 20, type: 'quiz' }
    ],
    safetyRule: "Igniter check: The safety key must stay in your pocket until launch! Never point a loaded rocket at anyone.",
    content: `A rocket is only as good as its RECOVERY. If the parachute doesn't open, the mission FAILS.

🪂 PARACHUTE FOLDING:
1. Gently push out the wadding (Don't pull!)
2. Shake out the parachute (untangle lines!)
3. Fold into quarters (neatly!)
4. Wrap with recovery wadding (loosely!)
5. Insert into body tube
6. Push nose cone on (snug, not tight!)

🔑 KEY SAFETY PROTOCOLS:

1. THE SAFETY KEY
   - Stays in YOUR pocket
   - Only comes out at T-minus 10
   - Goes back in immediately after launch

2. THE COUNTDOWN
   - 5 - Insert igniter
   - 4 - All personnel clear
   - 3 - Safety key inserted
   - 2 - Final systems check
   - 1 - LAUNCH
   - 0 - Ignition!

3. RANGE SAFETY
   - Wait for "ALL CLEAR" from RSO
   - Walk to rocket together
   - Never approach a misfire!

PRACTICE MAKES PERFECT!`,
    project: "Final Flight Prep",
    type: "Safety",
    reflectionPrompt: "Practice folding your parachute 5 times. Time yourself. What's your best time? What could make your recovery more reliable?",
    coachTip: "Run through multiple countdown rehearsals. Muscle memory is critical for safety protocols."
  },
  {
    week: 9,
    title: "The Launch Exam",
    objective: "Safely launch and recover your model rocket.",
    activities: [
      { id: 'preflight', name: 'Pre-Flight Checklist (Required)', duration: 15, type: 'checklist' },
      { id: 'range', name: 'Range Setup and Briefing', duration: 15, type: 'briefing' },
      { id: 'launch', name: 'Your Launch Attempt', duration: 20, type: 'launch' },
      { id: 'recovery', name: 'Safe Recovery', duration: 15, type: 'recovery' },
      { id: 'debrief', name: 'Mission Debrief', duration: 15, type: 'write' },
      { id: 'certify', name: 'Earn Your Wings!', duration: 10, type: 'certification' }
    ],
    safetyRule: "Wait for the Range Safety Officer's 'All Clear'! No exceptions!",
    content: `T-MINUS ZERO. Today you demonstrate your skill, Cadet.

This is your FINAL EXAM. Follow every step, and you'll earn your Junior Rocketry Wings!

📋 PRE-FLIGHT CHECKLIST:
□ Rocket body: No cracks or damage
□ Fins: Secure and aligned
□ Parachute: Folded correctly
□ Engine: Correctly inserted
□ Igniter: Properly connected
□ Launch lug: Clear and aligned

🎯 LAUNCH DAY PROTOCOL:

1. ARRIVE at launch site
2. REPORT to Range Safety Officer
3. COMPLETE pre-flight checklist
4. LOAD rocket onto launch rod
5. CONNECT igniter clips
6. STEP BACK to safe zone
7. WAIT for countdown
8. LAUNCH!
9. WATCH the recovery
10. RECOVER rocket safely

🏆 CERTIFICATION REQUIREMENTS:
Pass all safety checks
Launch successfully
Recover rocket intact
Complete mission debrief

GOOD LUCK, COMMANDER!
The sky is not the limit - it's just the beginning.`,
    project: "Final Launch",
    type: "Exam",
    reflectionPrompt: "How did your launch go? What went perfectly? What would you improve? Write a letter to next year's cadets explaining what you learned.",
    coachTip: "This is the celebration day! Take photos, celebrate successes, and make it memorable."
  }
];

export const QUIZ_DATA = {
  1: [
    { question: "What is a force?", options: ["A type of energy", "A push or a pull", "A kind of rocket fuel", "A measurement"], correct: 1, explanation: "A force is a push or a pull. Gravity, thrust, and drag are all forces!" },
    { question: "Which force always pulls objects DOWN toward Earth?", options: ["Thrust", "Drag", "Gravity", "Lift"], correct: 2, explanation: "Gravity always pulls objects toward the center of Earth." },
    { question: "Newton's First Law says an object at rest will...", options: ["Always move", "Stay at rest unless a force acts", "Float away", "Disappear"], correct: 1, explanation: "An object at rest stays at rest unless an outside force acts on it!" },
    { question: "What force pushes against a rocket as it moves through air?", options: ["Gravity", "Thrust", "Drag", "Weight"], correct: 2, explanation: "Drag is air resistance that pushes against moving objects." },
    { question: "When you throw a paper rocket, what provides the thrust?", options: ["Gravity", "Your arm", "The wind", "The fins"], correct: 1, explanation: "Your arm provides the force (thrust) that launches the rocket!" }
  ],
  2: [
    { question: "What provides thrust for a straw rocket?", options: ["Your breath", "Gunpowder", "Electricity", "Magnets"], correct: 0, explanation: "Your breath pushes air through the straw, creating thrust!" },
    { question: "What do fins do for a rocket?", options: ["Make it heavier", "Provide stability", "Add speed", "Create drag only"], correct: 1, explanation: "Fins keep the rocket flying straight by providing stability." },
    { question: "If your rocket tumbles or wobbles, what's likely wrong?", options: ["Too much thrust", "Fins missing or crooked", "Rocket is too light", "Too much tape"], correct: 1, explanation: "Missing or crooked fins cause unstable flight!" },
    { question: "What should you do after each test launch?", options: ["Give up", "Measure and record results", "Change everything", "Run to get it"], correct: 1, explanation: "Scientists always record their data to learn from each test!" },
    { question: "Which would likely fly FARTHER?", options: ["Heavy rocket with big fins", "Light rocket with small fins", "Crooked rocket", "Rocket with no fins"], correct: 1, explanation: "A light rocket with small fins has less drag and can fly farther!" }
  ],
  3: [
    { question: "Newton's Third Law says for every action, there is...", options: ["A reaction", "Less gravity", "More drag", "A celebration"], correct: 0, explanation: "For every action, there is an equal and opposite reaction!" },
    { question: "In a balloon rocket, what is the ACTION?", options: ["Balloon moves forward", "Air escapes backward", "String vibrates", "Nothing"], correct: 1, explanation: "Air escaping the balloon backward is the action!" },
    { question: "What is the REACTION in a balloon rocket?", options: ["Air escapes", "Balloon pops", "Balloon moves forward", "String gets wet"], correct: 2, explanation: "The balloon moving forward is the reaction to air escaping!" },
    { question: "What happens when you add more payload (weight)?", options: ["Flies faster", "Flies the same", "Flies slower or stops", "Flies higher"], correct: 2, explanation: "More weight means the balloon has to work harder, so it flies slower!" },
    { question: "Real rockets use the same principle as balloon rockets. What pushes the real rocket?", options: ["Hot gases escaping", "Magic", "The wind", "Propellers"], correct: 0, explanation: "Real rocket engines expel hot gases at high speed, creating thrust!" }
  ],
  4: [
    { question: "What compresses the air in a stomp rocket launcher?", options: ["Your foot stomping", "The wind", "The rocket", "The tube"], correct: 0, explanation: "When you stomp on the bottle, you compress (squeeze) the air inside!" },
    { question: "Why must only one person stomp at a time?", options: ["It's boring otherwise", "Safety - to prevent accidents", "To save energy", "No reason"], correct: 1, explanation: "Multiple people stomping could cause the launcher to break or rocket to fly unpredictably!" },
    { question: "How far should other people stand back during launch?", options: ["2 feet", "5 feet", "10 feet", "Right next to it"], correct: 2, explanation: "10 feet is the minimum safe distance for observers!" },
    { question: "What is the 'fist method' used for?", options: ["Counting rockets", "Estimating altitude", "Making a fist", "Measuring distance"], correct: 1, explanation: "The fist method helps estimate how high the rocket flies!" },
    { question: "What happens to the air when you stomp?", options: ["It disappears", "It gets compressed and escapes up the tube", "It gets colder", "It turns to water"], correct: 1, explanation: "Compressed air needs to escape - it goes up the tube and launches the rocket!" }
  ],
  5: [
    { question: "What's the goal of a DISTANCE rocket?", options: ["Fly as high as possible", "Fly as far as possible", "Look pretty", "Fly in circles"], correct: 1, explanation: "Distance rockets are designed to travel far horizontally!" },
    { question: "What's the goal of an ALTITUDE rocket?", options: ["Fly as high as possible", "Fly as far as possible", "Fly fast", "Spin around"], correct: 0, explanation: "Altitude rockets are designed to reach maximum height!" },
    { question: "Which design would be better for DISTANCE?", options: ["Large fins, heavy body", "Small fins, sleek design", "No fins at all", "Very fat body"], correct: 1, explanation: "Sleek designs with small fins reduce drag for distance!" },
    { question: "Engineers must make TRADE-OFFS. What does this mean?", options: ["Buying things", "Choosing one benefit over another", "Trading rockets", "Making mistakes"], correct: 1, explanation: "A trade-off means you gain one thing but might lose another!" },
    { question: "After testing, what should a good engineer do?", options: ["Give up", "Refine and improve the design", "Blame the materials", "Copy someone else"], correct: 1, explanation: "Engineers always test, learn, and improve their designs!" }
  ],
  6: [
    { question: "What is the pointy top part of a rocket called?", options: ["Body tube", "Nose cone", "Fin", "Launch lug"], correct: 1, explanation: "The nose cone is the pointy top that cuts through air!" },
    { question: "What part holds the engine and parachute?", options: ["Nose cone", "Body tube", "Fin", "Launch lug"], correct: 1, explanation: "The body tube is the main structure that holds everything!" },
    { question: "How many fins do most model rockets have?", options: ["1 or 2", "3 or 4", "10", "None"], correct: 1, explanation: "Most rockets have 3 or 4 fins for stability!" },
    { question: "What does the launch lug do?", options: ["Makes noise", "Slides onto the launch rod", "Holds the parachute", "Provides thrust"], correct: 1, explanation: "The launch lug guides the rocket along the launch rod!" },
    { question: "For stable flight, where should the Center of Gravity (CG) be?", options: ["Behind the CP", "Ahead of the CP", "In the middle", "Doesn't matter"], correct: 1, explanation: "CG must be ahead of CP for the rocket to fly straight!" }
  ],
  7: [
    { question: "When gluing fins, what's most important?", options: ["Speed", "Equal spacing and alignment", "Using lots of glue", "Color matching"], correct: 1, explanation: "Fins must be equally spaced and perpendicular for stable flight!" },
    { question: "What connects the nose cone to the body tube?", options: ["Tape", "Shock cord", "Glue", "String"], correct: 1, explanation: "The shock cord keeps the rocket together during recovery!" },
    { question: "Why should paint be LIGHTWEIGHT?", options: ["To look good", "Heavy paint reduces altitude", "It dries faster", "No reason"], correct: 1, explanation: "Extra weight from paint means your rocket won't fly as high!" },
    { question: "What happens if fins are crooked?", options: ["Nothing", "Corkscrew flight", "Faster flight", "Higher flight"], correct: 1, explanation: "Crooked fins cause the rocket to spiral instead of flying straight!" },
    { question: "When should you inspect your build?", options: ["Never", "Only after launch", "Before and after building", "Only if it crashes"], correct: 2, explanation: "Always inspect before and after each flight for damage!" }
  ],
  8: [
    { question: "Where should the safety key be before launch?", options: ["On the launcher", "In your pocket", "On the ground", "Given to a friend"], correct: 1, explanation: "The safety key stays in YOUR pocket until it's time to launch!" },
    { question: "What's the first step in parachute recovery?", options: ["Pull hard", "Gently push out the wadding", "Cut the lines", "Forget about it"], correct: 1, explanation: "Gently push out the wadding - never pull or you might break something!" },
    { question: "At what number in the countdown do you insert the igniter?", options: ["5", "3", "1", "0"], correct: 0, explanation: "At T-5, you insert the igniter into the engine!" },
    { question: "Who gives the 'All Clear' to approach the rocket?", options: ["Anyone", "The Range Safety Officer", "The loudest person", "No one"], correct: 1, explanation: "Only the Range Safety Officer can authorize recovery!" },
    { question: "What should you NEVER do with a misfire?", options: ["Leave it alone", "Wait 60 seconds", "Approach it immediately", "Tell an adult"], correct: 2, explanation: "Never approach a misfire - wait for adult supervision!" }
  ],
  9: [
    { question: "Before launch, who must you report to?", options: ["Your best friend", "Range Safety Officer", "Nobody", "The principal"], correct: 1, explanation: "Always report to the Range Safety Officer before launching!" },
    { question: "What should you do if your parachute doesn't open?", options: ["Panic", "It's a mission failure - learn for next time", "Blame the wind", "Try again immediately"], correct: 1, explanation: "Parachute failure means mission failure, but every failure is a learning opportunity!" },
    { question: "When can you approach the rocket after launch?", options: ["Immediately", "After 10 seconds", "Only after 'All Clear'", "Never"], correct: 2, explanation: "Wait for the Range Safety Officer's 'All Clear' signal!" },
    { question: "What three things earn you your Wings?", options: ["Pass safety, launch successfully, recover intact", "Have the prettiest rocket", "Launch three times", "Help clean up"], correct: 0, explanation: "Pass all safety checks, launch successfully, and recover your rocket intact!" },
    { question: "What's the most important part of launch day?", options: ["Winning", "Looking cool", "SAFETY", "Going home early"], correct: 2, explanation: "Safety is ALWAYS the #1 priority! Everything else is secondary!" }
  ]
};

export const PRE_FLIGHT_CHECKLIST = [
  { id: 'body', text: 'Rocket body has no cracks or damage', required: true },
  { id: 'fins', text: 'Fins are secure and properly aligned', required: true },
  { id: 'parachute', text: 'Parachute is correctly folded and packed', required: true },
  { id: 'engine', text: 'Engine is correctly inserted', required: true },
  { id: 'igniter', text: 'Igniter is properly connected', required: true },
  { id: 'lug', text: 'Launch lug is clear and aligned', required: true },
  { id: 'zone', text: 'Recovery zone is clear of people', required: true },
  { id: 'goggles', text: 'All personnel wearing eye protection', required: true }
];

export const PASSING_SCORE = 80; // Must get 80% on quizzes
export const MINUTES_PER_WEEK = 90; // 1.5 hours per week
