# Jira-Description-Templates
Autofill Jira ticket descriptions from a template.

At the time of the creation of the plugin there is no way to create templates for Jira descriptions. This [issue](https://community.atlassian.com/t5/Jira-questions/How-do-I-pre-populate-text-to-a-description-field-on-JIRA-Cloud/qaq-p/456606) corresponding to this was created in 2015, but it has yet to be implemented.

```
As before - JIRA doesn't do this natively, so you have to hack it.

I'm afraid for Cloud, there's no real way to do it, unless you start doing things with browser add-ons.
```
This is that hack.

## Usage
The add-on is inactive until the browser is on an Atlassian Jira webpage and the 'Create issue' pop-up is displayed.

![add template](https://github.com/BruceMacD/Jira-Description-Templates/blob/master/images/README_images/addTemplate.png)
![stored templates](https://github.com/BruceMacD/Jira-Description-Templates/blob/master/images/README_images/storedTemplates.png)

While the add-on is inactive you may still create and modify stored templates by clicking on the add-on and selecting options. This will open a tab that allows the creation and modification of templates.

![select template](https://github.com/BruceMacD/Jira-Description-Templates/blob/master/images/README_images/selectTemplate.png)
![populated issue](https://github.com/BruceMacD/Jira-Description-Templates/blob/master/images/README_images/populatedIssue.png)

Once the add-on is active on a 'Create issue' page simply click on the icon to display available templates. When the title of a template is clicked the text-field of the issue description will be populated with the corresponding text.

## Lisence
You may modify this plugin for any use you see fit.

## Future Work
It would be nice to have the ability to inject buttons corresponding to templates into the actual page, but that functionality is currently difficult in single page web applications without doing something inefficient.

## Assets Used
Application Icon - BomSymbols - https://creativemarket.com/BomSymbols
