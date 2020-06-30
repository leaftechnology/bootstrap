import frappe

def get_context(context):
    context['url'] = frappe.utils.get_url() + "/login"
    context['job'] = frappe.utils.get_url() + "/jobs"
    context['blog'] = frappe.utils.get_url() + "/blog"