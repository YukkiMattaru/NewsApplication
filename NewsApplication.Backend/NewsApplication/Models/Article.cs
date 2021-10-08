using System;
using System.ComponentModel.DataAnnotations;

namespace NewsApplication.Models
{
    public class Article
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Announce { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public DateTime PublicationTime { get; set; }
        [Required]
        public Guid RubricatorId { get; set; }
        public Rubricator Rubricator { get; set; }
    }
}
