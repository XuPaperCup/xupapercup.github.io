---
name: Suggestion
about: Suggest an idea for the website
title: "[suggest]"
labels: enhancement
assignees: ''

---

body:
  - type: dropdown
    attributes:
      label: The suggestion is related to? (You can choose more than one)
      multiple: true
      options:
        - Minecraft Bedrock Edition
        - Minecraft Java Edition
        - Miscellaneous
        - Others
      required: true
 - type: textarea
    attributes:
      label: Details
      placeholder: Write your suggestion details here
    validations:
      required: true
