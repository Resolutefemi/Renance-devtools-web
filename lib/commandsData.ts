export interface Command {
  name: string;
  shortDesc: string;
  longDesc: string;
  usage: string;
  flags?: string[];
  proTip?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  commands: Command[];
}

export const categories: Category[] = [
  {
    id: "files",
    name: "📁 Files",
    icon: "Folder",
    commands: [
      {
        name: "fcp",
        shortDesc: "Multi-threaded high-speed copy engine.",
        longDesc: "Bypasses standard OS file transfer bottlenecks by utilizing Python's concurrent.futures ThreadPoolExecutor. This multi-threaded approach divides large directories into chunks, transferring them simultaneously for up to 5x speed improvements.",
        usage: "dt fcp <source> <destination>",
        flags: ["--force", "--dry-run", "--verbose"],
        proTip: "Use this for moving node_modules or massive game assets where Explorer usually hangs."
      },
      {
        name: "send",
        shortDesc: "Zip current folder for instant sharing.",
        longDesc: "Quickly archives the current working directory into a timestamped or custom-named ZIP file. It intelligently ignores common clutter like .git and node_modules.",
        usage: "dt send",
        proTip: "Automatically saves to your Desktop for quick drag-and-drop sharing."
      },
      {
        name: "clean",
        shortDesc: "Deep-clean temporary files and build artifacts.",
        longDesc: "A smart cleanup utility that targets known bloat locations: __pycache__, .DS_Store, build/, dist/, and system temp folders.",
        usage: "dt clean",
        proTip: "Run this before zipping a project to significantly reduce the final file size."
      },
      {
        name: "organize",
        shortDesc: "Auto-sort folders into categorized structures.",
        longDesc: "Scans a directory and moves files into subfolders based on their extension (e.g., .jpg -> Images, .pdf -> Documents).",
        usage: "dt organize",
        proTip: "Perfect for cleaning up your Downloads folder in one second."
      },
      {
        name: "tree",
        shortDesc: "Visualize project structure as an ASCII tree.",
        longDesc: "Generates a beautiful, hierarchical representation of your directory structure, ignoring common clutter like .git and node_modules.",
        usage: "dt tree",
        proTip: "Paste this into your README.md to help other developers navigate your codebase."
      },
      {
        name: "find",
        shortDesc: "Recursive high-speed file locator.",
        longDesc: "Searches through your directory for files matching a specific name pattern. Much faster than standard OS search.",
        usage: "dt find <name>",
        proTip: "Only returns the first 10 matches to keep your terminal from being overwhelmed."
      },
      {
        name: "search",
        shortDesc: "Search for text inside files (recursive).",
        longDesc: "Searches for a specific string pattern within all files in a directory, excluding common folders like node_modules.",
        usage: "dt search <pattern> [path]",
        proTip: "Great for finding where a specific variable or function is defined across your project."
      },
      {
        name: "rename",
        shortDesc: "Bulk rename files in current folder.",
        longDesc: "Uses string replacement to rename multiple files at once. Ideal for batch processing files with similar naming patterns.",
        usage: "dt rename <pattern> <replacement>",
        proTip: "Use this to quickly change 'draft_' prefixes to 'final_' across dozens of files."
      }
    ]
  },
  {
    id: "media",
    name: "🎬 Media",
    icon: "Video",
    commands: [
      {
        name: "join",
        shortDesc: "Merge multiple video files into one.",
        longDesc: "Concatenates a list of video files into a single MP4 container without re-encoding where possible, ensuring no loss in quality.",
        usage: "dt join",
        proTip: "Make sure all videos have the same resolution and frame rate for the best result."
      },
      {
        name: "music",
        shortDesc: "Rip audio from any video file.",
        longDesc: "Extracts the audio track from a video and saves it as a high-quality MP3.",
        usage: "dt music",
        proTip: "Perfect for extracting songs from music videos or lectures."
      },
      {
        name: "shrink",
        shortDesc: "Compress videos for sharing.",
        longDesc: "Wraps FFmpeg with optimized presets for mobile sharing, targeting specific file size limits for WhatsApp and Discord.",
        usage: "dt shrink",
        proTip: "Use the 'whatsapp' preset to ensure it's small enough for easy mobile sending."
      },
      {
        name: "gif",
        shortDesc: "Convert video segments into high-quality GIFs.",
        longDesc: "Transforms video files into optimized GIFs with custom palettes to avoid color banding.",
        usage: "dt gif",
        proTip: "Great for documentation or creating quick reaction memes."
      },
      {
        name: "clip",
        shortDesc: "Extract a specific segment from a video.",
        longDesc: "Cuts a video file based on your start and end time inputs using stream copying for instant results.",
        usage: "dt clip",
        proTip: "Format times as HH:MM:SS for precise trimming."
      },
      {
        name: "compress",
        shortDesc: "Batch compress all images in a directory.",
        longDesc: "Uses the Pillow (PIL) library to optimize JPG and PNG files, reducing file size by up to 80%.",
        usage: "dt compress",
        proTip: "Recursively processes the entire folder, skipping node_modules and .git by default."
      }
    ]
  },
  {
    id: "hacker",
    name: "🕶️ Hacker",
    icon: "Shield",
    commands: [
      {
        name: "matrix",
        shortDesc: "Enter the terminal matrix.",
        longDesc: "An immersive digital rain simulation using curses. Fully customizable speed and color.",
        usage: "dt matrix",
        proTip: "Press 'Ctrl+C' to exit. Use it for background aesthetics during presentations."
      },
      {
        name: "vault",
        shortDesc: "Secure file encryption.",
        longDesc: "Implements high-speed XOR-based encryption with a password-derived key. Lock and unlock sensitive files directly.",
        usage: "dt vault <file>",
        proTip: "The same command both encrypts and decrypts; it's a perfect toggle."
      },
      {
        name: "port-scan",
        shortDesc: "Elite network diagnostic and port scanner.",
        longDesc: "Performs a TCP connect scan on a target host across a specified range of ports using non-blocking sockets.",
        usage: "dt port-scan <host>",
        proTip: "Defaults to scanning the first 1024 ports if no range is specified."
      },
      {
        name: "sniff",
        shortDesc: "Simulated network traffic diagnostics.",
        longDesc: "A visually stunning network activity simulator. Displays randomized packet 'captures' with IP addresses and protocols.",
        usage: "dt sniff",
        proTip: "Combine with 'dt matrix' in split-panes for the ultimate hacker look."
      },
      {
        name: "kill-all",
        shortDesc: "Kill all processes matching a name.",
        longDesc: "Forcefully terminates all active processes that contain the specified string in their name.",
        usage: "dt kill-all <process_name>",
        proTip: "Useful for killing multiple stuck chrome or node instances at once."
      },
      {
        name: "mac_addr",
        shortDesc: "Generate random MAC addresses.",
        longDesc: "Generates valid, randomized MAC addresses for hardware spoofing testing or network configuration mockups.",
        usage: "dt mac_addr",
        proTip: "Use this to test if your router's MAC filtering is working correctly."
      }
    ]
  },
  {
    id: "network",
    name: "🌐 Network",
    icon: "Globe",
    commands: [
      {
        name: "speed",
        shortDesc: "Real-time internet speed benchmark.",
        longDesc: "Connects to global Speedtest.net servers to measure latency (ping) and perform upload/download tests.",
        usage: "dt speed",
        proTip: "Run this if your video call is laggy to confirm if the issue is your ISP."
      },
      {
        name: "ping",
        shortDesc: "Test connectivity to a remote host.",
        longDesc: "A cross-platform wrapper for the system ping command to verify if a server is reachable.",
        usage: "dt ping <host>",
        proTip: "Defaults to google.com if no host is provided."
      },
      {
        name: "myip",
        shortDesc: "Retrieve your public IP address.",
        longDesc: "Queries multiple external APIs to find your public IPv4 address accurately.",
        usage: "dt myip",
        proTip: "Handy when you need to whitelist your current IP on a cloud provider."
      },
      {
        name: "dns",
        shortDesc: "Instant DNS record lookup.",
        longDesc: "Performs a forward DNS lookup to resolve a hostname to its corresponding IP address.",
        usage: "dt dns <host>",
        proTip: "Use this to verify if your domain settings have propagated."
      },
      {
        name: "scan-network",
        shortDesc: "Discover devices on your local network.",
        longDesc: "Utilizes the ARP table to list all active devices on your current LAN.",
        usage: "dt scan-network",
        proTip: "Use this to find your Raspberry Pi's IP address without logging into the router."
      },
      {
        name: "whois",
        shortDesc: "Detailed domain registration lookup.",
        longDesc: "Queries global RDAP databases to retrieve registration details for any domain, including registrar information.",
        usage: "dt whois <domain>",
        proTip: "Uses API-based lookup for speed and stability, no local WHOIS binary required."
      }
    ]
  },
  {
    id: "deploy",
    name: "🚀 Deploy",
    icon: "Cloud",
    commands: [
      {
        name: "deploy",
        shortDesc: "Unified one-click deployment engine.",
        longDesc: "A master wrapper around Vercel, Netlify, and Render CLIs. Detects project type and deploys instantly.",
        usage: "dt deploy",
        proTip: "The fastest way to get your code live from your terminal."
      },
      {
        name: "login",
        shortDesc: "Authenticate with cloud providers.",
        longDesc: "Opens the secure OAuth login flow for Vercel or other supported providers directly in your browser.",
        usage: "dt login",
        proTip: "You only need to do this once per machine."
      },
      {
        name: "live",
        shortDesc: "List all active deployment URLs.",
        longDesc: "Queries your cloud providers and lists all currently active sites and their status.",
        usage: "dt live",
        proTip: "Quickly grab the link to your latest project for sharing."
      },
      {
        name: "logs",
        shortDesc: "Real-time production error logging.",
        longDesc: "Tails the live production logs from your deployed application for real-time debugging.",
        usage: "dt logs",
        proTip: "Press 'Ctrl+C' to stop the stream."
      }
    ]
  },
  {
    id: "git",
    name: "🐙 Git",
    icon: "GitBranch",
    commands: [
      {
        name: "gac",
        shortDesc: "The ultimate Add-Commit-Push flow.",
        longDesc: "Smartly orchestrates adding all changes, prompting for a commit message, and pushing to your repository.",
        usage: "dt gac",
        proTip: "The only Git command you'll ever need for 99% of your daily updates."
      },
      {
        name: "repo",
        shortDesc: "Create a GitHub repo from the CLI.",
        longDesc: "Initializes a local repository and creates a matching remote repository on GitHub instantly.",
        usage: "dt repo",
        proTip: "Saves you from having to visit github.com to start a new project."
      },
      {
        name: "pr",
        shortDesc: "Create a GitHub Pull Request.",
        longDesc: "Interactive CLI flow to push current branch and create a PR on GitHub with custom title and body.",
        usage: "dt pr",
        proTip: "Requires GitHub CLI (gh) to be installed and authenticated."
      },
      {
        name: "undo",
        shortDesc: "Revert commits or pushes safely.",
        longDesc: "Provides an interactive menu to undo your last action with soft or hard reset options.",
        usage: "dt undo",
        proTip: "Use soft reset to keep your changes but redo the commit message."
      },
      {
        name: "sync",
        shortDesc: "Sync local repo with origin.",
        longDesc: "Fetches latest changes from origin and rebases your current branch to keep it up to date.",
        usage: "dt sync",
        proTip: "Run this before starting new work to avoid merge conflicts."
      }
    ]
  },
  {
    id: "system",
    name: "💻 System",
    icon: "Cpu",
    commands: [
      {
        name: "doctor",
        shortDesc: "Run a full system health diagnostic.",
        longDesc: "Audits essential developer tools and verifies Renance DevTools dependencies.",
        usage: "dt doctor",
        proTip: "Run this if a command isn't working or after a fresh installation."
      },
      {
        name: "ports",
        shortDesc: "List all active listening ports.",
        longDesc: "Finds every process currently listening for network connections, mapping PIDs to process names.",
        usage: "dt ports",
        proTip: "Pair with 'dt kill-port' to free up a blocked dev server."
      },
      {
        name: "kill-port",
        shortDesc: "Forcefully close a blocked port.",
        longDesc: "Identifies and terminates the process holding a specific port immediately.",
        usage: "dt kill-port <port>",
        proTip: "Enter the port number and Renance handles the rest automatically."
      },
      {
        name: "wifi",
        shortDesc: "Extract saved WiFi passwords.",
        longDesc: "Queries system profiles to retrieve clear-text passwords for previously connected networks.",
        usage: "dt wifi",
        proTip: "Handy when you forget your own home password."
      },
      {
        name: "battery",
        shortDesc: "Detailed laptop battery status.",
        longDesc: "Shows current percentage, charging state, and estimated time remaining.",
        usage: "dt battery",
        proTip: "Useful when working in full-screen terminal modes."
      },
      {
        name: "space",
        shortDesc: "Instant disk usage audit.",
        longDesc: "Calculates total, used, and free space on your primary drive with health percentages.",
        usage: "dt space",
        proTip: "Run this when your terminal starts feeling sluggish."
      },
      {
        name: "info",
        shortDesc: "Deep system hardware diagnostics.",
        longDesc: "Retrieves CPU architecture, RAM totals, Disk health, and OS version.",
        usage: "dt info",
        proTip: "Use this to check system specs before running heavy builds."
      }
    ]
  },
  {
    id: "phone",
    name: "📱 Phone",
    icon: "Smartphone",
    commands: [
      {
        name: "serve-phone",
        shortDesc: "Serve folder to phone via QR.",
        longDesc: "Starts a local HTTP server and displays a QR code to quickly access files on your mobile device.",
        usage: "dt serve-phone",
        proTip: "Scan the QR code to instantly download files to your phone."
      },
      {
        name: "torch",
        shortDesc: "Toggle phone torch (Termux).",
        longDesc: "Remotely control your Android device's flashlight via Termux-API.",
        usage: "dt torch",
        proTip: "Requires Termux and Termux-API installed on the device."
      },
      {
        name: "sms",
        shortDesc: "Send SMS from terminal (Termux).",
        longDesc: "Prompts for a number and message to send an SMS directly from your CLI.",
        usage: "dt sms",
        proTip: "Great for automated notifications from scripts running on your phone."
      },
      {
        name: "hotspot",
        shortDesc: "Toggle hotspot (Termux).",
        longDesc: "Commands to manage your device's portable hotspot settings directly from the terminal.",
        usage: "dt hotspot",
        proTip: "Handy for tethering without navigating through Android settings."
      }
    ]
  },
  {
    id: "crypto",
    name: "🔐 Crypto",
    icon: "Key",
    commands: [
      {
        name: "passgen",
        shortDesc: "Generate a strong password.",
        longDesc: "Creates a highly secure, randomized password with letters, numbers, and symbols.",
        usage: "dt passgen [--length 16]",
        proTip: "Default length is 16, but you can specify any size for maximum security."
      },
      {
        name: "hash",
        shortDesc: "Generate MD5 and SHA256 hashes.",
        longDesc: "Calculates both MD5 and SHA256 cryptographic hashes for any provided text string.",
        usage: "dt hash <text>",
        proTip: "Use this to verify data integrity or generate unique identifiers."
      },
      {
        name: "b64encode",
        shortDesc: "Base64 encode text.",
        longDesc: "Converts plain text into Base64 encoded format for safe transmission or storage.",
        usage: "dt b64encode <text>",
        proTip: "Useful for embedding small data strings into URLs or JSON."
      },
      {
        name: "morse",
        shortDesc: "Translate text to Morse code.",
        longDesc: "Converts standard alphanumeric characters into their Morse code dots and dashes representation.",
        usage: "dt morse <text>",
        proTip: "Perfect for educational purposes or making your messages look vintage."
      }
    ]
  },
  {
    id: "dev",
    name: "👨‍💻 Dev",
    icon: "Code2",
    commands: [
      {
        name: "ignore",
        shortDesc: "Generate .gitignore for any language.",
        longDesc: "Fetches official .gitignore templates from GitHub for Node, Python, Go, Rust, and more.",
        usage: "dt ignore <lang>",
        proTip: "Save time by generating a complete ignore file in one command."
      },
      {
        name: "license",
        shortDesc: "Add MIT License to project.",
        longDesc: "Interactive tool to generate an MIT License file with your name and the current year.",
        usage: "dt license",
        proTip: "Ensures your open-source projects are properly licensed from the start."
      },
      {
        name: "readme",
        shortDesc: "Generate a beautiful README template.",
        longDesc: "Creates a professionally structured README.md file with sections for installation and usage.",
        usage: "dt readme",
        proTip: "The first step to a great project is a clear README."
      },
      {
        name: "github",
        shortDesc: "GitHub user info lookup.",
        longDesc: "Fetches public profile data, repo counts, and contribution info for any GitHub username.",
        usage: "dt github <username>",
        proTip: "Quickly check a developer's stats without opening a browser."
      }
    ]
  },
  {
    id: "utils",
    name: "🛠️ Utils",
    icon: "Settings",
    commands: [
      {
        name: "qr",
        shortDesc: "Generate QR codes for any text.",
        longDesc: "Transforms any string or URL into a scannable QR code PNG.",
        usage: "dt qr <text>",
        proTip: "Quickly share links between your laptop and mobile device."
      },
      {
        name: "screenshot",
        shortDesc: "Take a screenshot of the screen.",
        longDesc: "Captures the entire screen and saves it as a PNG file in your images directory.",
        usage: "dt screenshot",
        proTip: "Faster than using OS snipping tools when you need a quick full-screen capture."
      },
      {
        name: "pomo",
        shortDesc: "Pomodoro timer for focus.",
        longDesc: "Starts a 25-minute focus session followed by a short break to boost your productivity.",
        usage: "dt pomo",
        proTip: "Use this to stay focused during deep work sessions."
      },
      {
        name: "weather",
        shortDesc: "Instant weather report for any city.",
        longDesc: "Fetches real-time temperature, humidity, and conditions using the OpenWeather API.",
        usage: "dt weather <city>",
        proTip: "Defaults to your current location if no city is specified."
      },
      {
        name: "shorten",
        shortDesc: "Create tiny URLs for long links.",
        longDesc: "Uses the CleanURI API to generate shortened versions of long web addresses.",
        usage: "dt shorten <url>",
        proTip: "Ideal for making links more readable in documentation."
      },
      {
        name: "todo",
        shortDesc: "CLI-based task management.",
        longDesc: "A persistent task manager that lives in your terminal to track your progress.",
        usage: "dt todo add <task>",
        proTip: "Your tasks are saved locally and persist between sessions."
      },
      {
        name: "json",
        shortDesc: "Prettify and format JSON files.",
        longDesc: "Reads a JSON file and rewrites it with proper indentation and sorted keys for readability.",
        usage: "dt json <file>",
        proTip: "Great for fixing messy API response logs."
      }
    ]
  },
  {
    id: "math",
    name: "🧮 Math",
    icon: "Calculator",
    commands: [
      {
        name: "add",
        shortDesc: "Sum multiple numbers.",
        longDesc: "Calculates the total of any number of arguments provided.",
        usage: "dt add 10 20 30",
        proTip: "Supports decimals and negative numbers automatically."
      },
      {
        name: "mul",
        shortDesc: "Multiply multiple numbers.",
        longDesc: "Calculates the product of all arguments provided.",
        usage: "dt mul 5 5 2",
        proTip: "Handy for quick calculations without a GUI."
      },
      {
        name: "pow",
        shortDesc: "Calculate power (x^y).",
        longDesc: "A high-precision exponentiation tool for calculating powers and roots.",
        usage: "dt pow <base> <exponent>",
        proTip: "Use 0.5 as an exponent to find the square root."
      },
      {
        name: "sqrt",
        shortDesc: "Calculate square root.",
        longDesc: "Returns the square root of a number with high precision.",
        usage: "dt sqrt <number>",
        proTip: "Faster than 'dt pow <num> 0.5' for simple roots."
      },
      {
        name: "fact",
        shortDesc: "Calculate factorial.",
        longDesc: "Computes the factorial of a positive integer using optimized recursion.",
        usage: "dt fact <n>",
        proTip: "Useful for probability and statistics calculations."
      },
      {
        name: "bmi",
        shortDesc: "Body Mass Index calculator.",
        longDesc: "Calculates BMI based on height and weight with WHO health classifications.",
        usage: "dt bmi <weight> <height>",
        proTip: "Input weight in kg and height in meters."
      }
    ]
  },
  {
    id: "text",
    name: "🔤 Text",
    icon: "Type",
    commands: [
      {
        name: "upper",
        shortDesc: "Convert text to UPPERCASE.",
        longDesc: "Instantly transforms any input string to all capital letters.",
        usage: "dt upper <text>",
        proTip: "Useful for formatting headers or constants in code."
      },
      {
        name: "lower",
        shortDesc: "Convert text to lowercase.",
        longDesc: "Transforms any input string to all small letters for normalization.",
        usage: "dt lower <text>",
        proTip: "Perfect for normalizing filenames or user input."
      },
      {
        name: "title",
        shortDesc: "Convert text to Title Case.",
        longDesc: "Capitalizes the first letter of every word in the provided string.",
        usage: "dt title <text>",
        proTip: "Great for formatting blog titles or names."
      },
      {
        name: "reverse",
        shortDesc: "Flip text string backwards.",
        longDesc: "Reverses the order of characters in a string.",
        usage: "dt reverse <text>",
        proTip: "Try reversing a palindrome!"
      },
      {
        name: "slugify",
        shortDesc: "Create URL-friendly slugs.",
        longDesc: "Removes special characters and replaces spaces with hyphens for SEO-friendly URLs.",
        usage: "dt slugify <text>",
        proTip: "Forces everything to lowercase for maximum compatibility."
      },
      {
        name: "wordcount",
        shortDesc: "Count words in text or file.",
        longDesc: "Provides an accurate count of words, characters, and lines in the input.",
        usage: "dt wordcount <text>",
        proTip: "Pass a filename to audit the length of a document."
      }
    ]
  },
  {
    id: "fun",
    name: "🎲 Fun",
    icon: "Gamepad2",
    commands: [
      {
        name: "joke",
        shortDesc: "Get a random programmer joke.",
        longDesc: "Fetches a high-quality developer-themed joke to lighten the mood.",
        usage: "dt joke",
        proTip: "The best medicine for a failed build."
      },
      {
        name: "kanye",
        shortDesc: "Random Kanye West quote.",
        longDesc: "Fetches an inspirational or unique quote from the Kanye.rest API.",
        usage: "dt kanye",
        proTip: "Surprisingly motivational during late-night coding."
      },
      {
        name: "riddles",
        shortDesc: "Test your brain with a riddle.",
        longDesc: "Displays a random riddle and keeps the answer hidden until you're ready.",
        usage: "dt riddles",
        proTip: "Great for team ice-breakers."
      },
      {
        name: "bitcoin",
        shortDesc: "Current Bitcoin price in USD.",
        longDesc: "Fetches live price data from the CoinDesk API.",
        usage: "dt bitcoin",
        proTip: "Updated every 60 seconds from global exchange averages."
      },
      {
        name: "catfact",
        shortDesc: "A random fact about cats.",
        longDesc: "Fetches interesting and obscure feline trivia from global APIs.",
        usage: "dt catfact",
        proTip: "A great distraction during long npm installs."
      },
      {
        name: "dogfact",
        shortDesc: "A random fact about dogs.",
        longDesc: "Interesting and fun facts about our canine friends.",
        usage: "dt dogfact",
        proTip: "Because dog lovers deserve facts too!"
      }
    ]
  }
];
