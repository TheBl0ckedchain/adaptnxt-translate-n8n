Automated Language Pack Translation Workflow (n8n + Azure OpenAI)
This project provides an automated workflow for translating JSON-based language packs from a GitHub repository into another language (e.g., Hindi) using n8n and Azure OpenAI.
It is designed for developers and teams who need to localize software quickly, accurately, and at scale.
Features
	•	Recursive Extraction: Scans a specified folder (and subfolders) in your repo for all JSON files.
	•	Automated Translation: Translates every string (including nested keys) using Azure OpenAI’s GPT models.
	•	Customizable Language & Folder: Easily set the target language and output folder using workflow variables.
	•	Error Handling: Falls back to the original English string if translation fails.
	•	Preserves Structure: Rebuilds translated JSON files with the original structure and writes them to a parallel folder (e.g., `hi_in/`).
	•	GitHub Integration: Automatically commits translated files back to your repository.
How It Works
	1.	Select Folder: The workflow scans a specified folder (e.g., `en_US(smol)/`) in your GitHub repo for JSON files.
	2.	Extract Strings: All translatable strings (including nested ones) are extracted, along with their file paths and key paths.
	3.	Translate: Each string is sent to Azure OpenAI for translation, using a prompt that ensures clean, direct translations.
	4.	Error Fallback: If translation fails, the original English string is used.
	5.	Rebuild JSON: Translated strings are reassembled into their original JSON structure.
	6.	Upload: The translated files are saved to a new folder (e.g., `hi_in/`) in your repo, preserving all subfolders and filenames.
Insert your workflow diagram or image here, if desired.
Setup Steps
	1.	Clone or Import the Workflow
Import the provided n8n workflow JSON into your n8n instance.
	2.	Configure Credentials
Set up your GitHub and Azure OpenAI credentials in n8n.
	3.	Edit Variables
Change the values in the Set node for your desired language and folders.
	4.	Run the Workflow
The workflow will scan, translate, rebuild, and upload your language pack automatically.
Customization
	•	Add More Languages: Change the `targetLang` variable and re-run.
	•	Change Source/Output Folders: Adjust `sourceFolder` and `outputFolder` in the Set node.
	•	Schedule Runs: Use n8n’s triggers to automate translation on a schedule or on new commits.
Happy automating and localizing!
