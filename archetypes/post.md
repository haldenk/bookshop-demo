---
title: "{{ replace .Name "-" " " | title }}"  # Required
date: {{ .Date | default (now.Format "2006-01-02") }}  # Required
image: "/images/blog/"  # Required
---
