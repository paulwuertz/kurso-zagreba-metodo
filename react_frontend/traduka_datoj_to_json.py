import json, generate

langs = [
    "ar", "ca", "cs", "da", "en", "es", "fa", "fr", "frp", "he", "hr", "hu", "id", "it", "kk", "km", "ko", "lo", "ms", "my", "nl", "pl", "pt", "ru", "sk", "sl", "sv", "sw", "th", "tr", "uk", "ur", "vi", "zh", "zh-tw",
]

for l in langs:
    open("react_frontend/public/data/data_{}.json".format(l), "w").write(json.dumps(generate.load(l), ensure_ascii=False))
