const firstNameArray = [
    "Hyper", "Neo", "Terra", "Xeno", "Infinity", "Nano", "Quantum", "Omni",
    "CryptoGen", "Shadow", "Cyber", "Stellar", "Holo", "Meta", "Astra", "Epoch",
    "Ether", "Nexus", "Para", "Synth", "Moon", "Unicorn", "HODL", "Whales",
    "Satoshis", "FOMO", "ToThe", "Bearish", "Bullish", "Hodlonaut", "Astro",
    "CryptoMancer", "BitRaptor", "Coinasaurus", "Blocktopus", "FUDster",
    "Lambo", "ShillFactory", "Flippening", "CoinGuru"
];

const lastNameArray = [
    "Core", "Byte", "Flow", "Seed", "Trust", "Path", "Ring", "Zone", "Stack", "Warp",
    "Hype", "Quark", "Dime", "Flux", "Grid", "Crest", "Veil", "Arch", "Stride", "Roam",
    "Coin", "Chain", "Node", "Block", "Key", "Link", "Gem", "Pulse", "Hub", "Mint",
    "Bolt", "Web", "Vault", "Bit", "Mesh", "Shard", "Code", "Fork", "Spark", "Wave"
];



document.getElementById("generate").addEventListener("click", function() {
    const randomFirstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)];
    const randomLastName = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];
    const randomName = randomFirstName + " " + randomLastName;

    document.getElementById("result").textContent = randomName;
});

