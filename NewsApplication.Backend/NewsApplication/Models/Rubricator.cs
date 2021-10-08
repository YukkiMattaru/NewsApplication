using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NewsApplication.Models
{
    public class Rubricator
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Path { get; set; }
        public ICollection<Article> Articles { get; set; } = new List<Article>();
    }
}
