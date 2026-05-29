export default async function handler(req, res) {
    try {
        const API_NAME = "api by pinoolavender";

        const code = req.body?.code;

        if (!code) {
            return res.status(400).json({
                api: API_NAME,
                error: "code required"
            });
        }

        const response = await fetch("https://wearedevs.net/api/obfuscate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                script: code
            })
        });

        const result = await response.json();

        return res.status(200).json({
            api: API_NAME,
            success: true,
            obfuscated: result.obfuscated || result
        });

    } catch (err) {
        return res.status(500).json({
            api: "api by pinoolavender",
            success: false,
            error: err.message
        });
    }
}
