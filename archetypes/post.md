---
title: "{{ replace .Name "-" " " | title }}"  # Required
date: {{ .Date | default (now.Format "2006-01-02") }}  # Required and defaults to today's date
draft: true
thumbnail: "/images/blog/"  # Required
banner: "/images/blog/"  # Required
---
