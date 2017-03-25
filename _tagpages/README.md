This folder contains a page for each *tag* on the website. Tags are used to organize
posts by thematics. The tag system works almost automatically except that we need
to explicitly create a page for each tag we use (due to some limitations of jekyll
gitHub pages). 

For each tag, we create a *almost empty* *md* file which only contains:

    ---
    layout: tagpage
    tag: my-tag-name
    title: My tag Title
    class: (optional) either software (appears in yellow), keyword (appears in green), or event (appears in blue)
    ---

Use the other tag pages as examples.
